#!/usr/bin/env ts-node

/**
 * Download all kie.ai assets from manifest.json to local storage
 *
 * CRITICAL: tempfile.aiquickdraw.com URLs expire within 24 hours!
 * This script downloads all assets permanently to public/assets/
 */

import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface HeroAsset {
  image: string;
  video: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  image: string;
}

interface Manifest {
  generated_at: string;
  heroes: {
    luxusMinimalist: HeroAsset;
    cinematicStorytelling: HeroAsset;
    dataRoiDriven: HeroAsset;
    editorialMagazine: HeroAsset;
  };
  portfolio: PortfolioItem[];
}

async function downloadAsset(url: string, outputPath: string): Promise<void> {
  const downloadScript = path.join(
    process.env.USERPROFILE || '',
    '.claude',
    'plugins',
    'cache',
    'anthropic-agent-skills',
    'document-skills',
    '69c0b1a06741',
    'skills',
    'kie-asset-generator',
    'scripts',
    'download_asset.py'
  );

  // Create output directory
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`Downloading: ${url}`);
  console.log(`      To: ${outputPath}`);

  try {
    const { stdout, stderr } = await execAsync(`python "${downloadScript}" "${url}" "${outputPath}"`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error: any) {
    // Python might not be available, fallback to Node.js fetch
    console.log('Python not available, using Node.js fetch...');

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Downloaded successfully (${buffer.length.toLocaleString()} bytes)`);
  }
}

async function main() {
  const manifestPath = path.join(process.cwd(), 'public', 'generated', 'manifest.json');
  const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  const assetsDir = path.join(process.cwd(), 'public', 'assets');

  console.log('📥 Downloading all assets from manifest.json...\n');

  // Download hero images
  console.log('🖼️  Downloading hero images...');
  await downloadAsset(
    manifest.heroes.luxusMinimalist.image,
    path.join(assetsDir, 'heroes', 'luxus-minimalist.jpg')
  );
  await downloadAsset(
    manifest.heroes.cinematicStorytelling.image,
    path.join(assetsDir, 'heroes', 'cinematic-storytelling.jpg')
  );
  await downloadAsset(
    manifest.heroes.dataRoiDriven.image,
    path.join(assetsDir, 'heroes', 'data-roi-driven.jpg')
  );
  await downloadAsset(
    manifest.heroes.editorialMagazine.image,
    path.join(assetsDir, 'heroes', 'editorial-magazine.jpg')
  );

  // Download hero videos
  console.log('\n🎥 Downloading hero videos...');
  await downloadAsset(
    manifest.heroes.luxusMinimalist.video,
    path.join(assetsDir, 'heroes', 'luxus-minimalist.mp4')
  );
  await downloadAsset(
    manifest.heroes.cinematicStorytelling.video,
    path.join(assetsDir, 'heroes', 'cinematic-storytelling.mp4')
  );
  await downloadAsset(
    manifest.heroes.dataRoiDriven.video,
    path.join(assetsDir, 'heroes', 'data-roi-driven.mp4')
  );
  await downloadAsset(
    manifest.heroes.editorialMagazine.video,
    path.join(assetsDir, 'heroes', 'editorial-magazine.mp4')
  );

  // Download portfolio images
  console.log('\n📸 Downloading portfolio images...');
  for (const item of manifest.portfolio) {
    const ext = path.extname(new URL(item.image).pathname);
    await downloadAsset(
      item.image,
      path.join(assetsDir, 'portfolio', `${item.id}${ext}`)
    );
  }

  // Update manifest with local paths
  console.log('\n📝 Updating manifest with local paths...');
  const updatedManifest = {
    ...manifest,
    heroes: {
      luxusMinimalist: {
        image: '/assets/heroes/luxus-minimalist.jpg',
        video: '/assets/heroes/luxus-minimalist.mp4',
      },
      cinematicStorytelling: {
        image: '/assets/heroes/cinematic-storytelling.jpg',
        video: '/assets/heroes/cinematic-storytelling.mp4',
      },
      dataRoiDriven: {
        image: '/assets/heroes/data-roi-driven.jpg',
        video: '/assets/heroes/data-roi-driven.mp4',
      },
      editorialMagazine: {
        image: '/assets/heroes/editorial-magazine.jpg',
        video: '/assets/heroes/editorial-magazine.mp4',
      },
    },
    portfolio: manifest.portfolio.map(item => {
      const ext = path.extname(new URL(item.image).pathname);
      return {
        ...item,
        image: `/assets/portfolio/${item.id}${ext}`,
      };
    }),
  };

  fs.writeFileSync(manifestPath, JSON.stringify(updatedManifest, null, 2));

  console.log('\n✅ All assets downloaded successfully!');
  console.log('📁 Assets stored in: public/assets/');
  console.log('📋 Manifest updated with local paths');
}

main().catch(console.error);
