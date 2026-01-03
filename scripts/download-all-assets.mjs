#!/usr/bin/env node

/**
 * Download all kie.ai assets from manifest.json to local storage
 *
 * CRITICAL: tempfile.aiquickdraw.com URLs expire within 24 hours!
 * This script downloads all assets permanently to public/assets/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadAsset(url, outputPath) {
  // Create output directory
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`Downloading: ${url}`);
  console.log(`      To: ${outputPath}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Downloaded successfully (${buffer.length.toLocaleString()} bytes)`);
  } catch (error) {
    console.error(`❌ Failed to download: ${error.message}`);
    throw error;
  }
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const manifestPath = path.join(projectRoot, 'public', 'generated', 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  const assetsDir = path.join(projectRoot, 'public', 'assets');

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
    const url = new URL(item.image);
    const ext = path.extname(url.pathname);
    await downloadAsset(
      item.image,
      path.join(assetsDir, 'portfolio', `${item.id}${ext}`)
    );
  }

  // Update manifest with local paths
  console.log('\n📝 Updating manifest with local paths...');
  const updatedManifest = {
    ...manifest,
    downloaded_at: new Date().toISOString(),
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
      const url = new URL(item.image);
      const ext = path.extname(url.pathname);
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
