/**
 * Asset Generation Script
 * Generates all hero images/videos and portfolio images using kie.ai API
 */

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { generateImage, generateVideo } from '../src/lib/kie-api';

// Load environment variables
dotenv.config({ path: '.env.local' });

interface HeroAsset {
  image: string;
  video: string;
}

interface PortfolioAsset {
  id: string;
  title: string;
  location: string;
  image: string;
}

interface AssetManifest {
  generated_at: string;
  heroes: {
    luxusMinimalist: HeroAsset;
    cinematicStorytelling: HeroAsset;
    dataRoiDriven: HeroAsset;
    editorialMagazine: HeroAsset;
  };
  portfolio: PortfolioAsset[];
}

// Hero prompts for each variant
const HERO_PROMPTS = {
  luxusMinimalist: {
    image: "Luxurious Vienna apartment interior, floor-to-ceiling windows, golden hour sunlight streaming through, minimalist elegant furniture, warm cream and gold tones, high-end modern design, sophisticated atmosphere, professional real estate photography, 8K quality, sharp focus",
    video: "Slow pan across luxurious Vienna apartment, golden hour light, elegant minimalist design"
  },
  cinematicStorytelling: {
    image: "Dramatic twilight penthouse view, moody atmospheric lighting, Vienna cityscape through large windows, cinematic composition, deep shadows and highlights, emotional storytelling atmosphere, premium real estate, 8K quality, film-like aesthetic",
    video: "Cinematic dolly shot through dramatic penthouse, twilight atmosphere, moody lighting"
  },
  dataRoiDriven: {
    image: "Modern professional office space with analytics screens, clean contemporary design, blue and green accents, data visualization on displays, Vienna business district view, corporate elegance, high-tech aesthetic, 8K quality, crisp details",
    video: "Smooth tracking shot of modern office, analytics screens, professional atmosphere"
  },
  editorialMagazine: {
    image: "Editorial style Viennese Altbau apartment, classic architecture details, ornate ceiling moldings, herringbone parquet floors, natural window light, magazine-worthy composition, timeless elegance, rich textures, 8K quality, editorial photography",
    video: "Graceful camera movement through classic Viennese Altbau, editorial magazine style"
  }
};

// Portfolio prompts
const PORTFOLIO_PROMPTS = [
  {
    id: "penthouse-doebling",
    title: "Penthouse Döbling",
    location: "1190 Wien",
    prompt: "Luxury penthouse rooftop terrace in Vienna Döbling, panoramic city views, modern outdoor furniture, sunset lighting, premium real estate photography, 8K quality"
  },
  {
    id: "altbau-innere-stadt",
    title: "Altbau Innere Stadt",
    location: "1010 Wien",
    prompt: "Historic Viennese Altbau living room, high ornate ceilings, classic architecture, elegant period details, warm ambient lighting, professional interior photography, 8K quality"
  },
  {
    id: "modern-loft-mariahilf",
    title: "Modern Loft Mariahilf",
    location: "1060 Wien",
    prompt: "Contemporary urban loft space in Vienna, industrial chic design, exposed brick walls, modern furnishings, natural daylight, professional real estate photography, 8K quality"
  },
  {
    id: "villa-hietzing",
    title: "Villa Hietzing",
    location: "1130 Wien",
    prompt: "Elegant Vienna villa exterior, classic architecture, manicured garden, golden hour photography, luxury residential real estate, 8K quality, professional composition"
  },
  {
    id: "neubau-balkon",
    title: "Neubau Balkon",
    location: "1070 Wien",
    prompt: "Modern apartment balcony in Vienna Neubau district, urban views, contemporary outdoor design, evening ambiance, lifestyle real estate photography, 8K quality"
  },
  {
    id: "dachgeschoss-leopoldstadt",
    title: "Dachgeschoss Leopoldstadt",
    location: "1020 Wien",
    prompt: "Bright top-floor apartment in Vienna Leopoldstadt, skylights, modern interior design, spacious living area, natural light, professional real estate photography, 8K quality"
  }
];

/**
 * Save manifest incrementally
 */
function saveManifest(manifest: AssetManifest) {
  const manifestPath = path.join(process.cwd(), 'public', 'generated', 'manifest.json');
  const manifestDir = path.dirname(manifestPath);

  if (!fs.existsSync(manifestDir)) {
    fs.mkdirSync(manifestDir, { recursive: true });
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`\n💾 Manifest saved to ${manifestPath}\n`);
}

/**
 * Main generation function
 */
async function generateAllAssets() {
  console.log('🚀 Starting kie.ai asset generation...\n');
  console.log('This will take approximately 10-15 minutes.\n');

  const manifest: AssetManifest = {
    generated_at: new Date().toISOString(),
    heroes: {
      luxusMinimalist: { image: '', video: '' },
      cinematicStorytelling: { image: '', video: '' },
      dataRoiDriven: { image: '', video: '' },
      editorialMagazine: { image: '', video: '' }
    },
    portfolio: []
  };

  // Generate hero assets (4 variants × 2 assets each = 8 total)
  console.log('═══════════════════════════════════════════════════════');
  console.log('  PART 1: HERO ASSETS (4 variants)');
  console.log('═══════════════════════════════════════════════════════\n');

  let heroCount = 0;
  for (const [key, prompts] of Object.entries(HERO_PROMPTS)) {
    heroCount++;
    console.log(`\n[${heroCount}/4] Processing hero: ${key}`);
    console.log('─'.repeat(60));

    try {
      // Generate image
      const imageAsset = await generateImage(prompts.image);
      manifest.heroes[key as keyof typeof manifest.heroes].image = imageAsset.url;

      // Save manifest after each success
      saveManifest(manifest);

      // Generate video from image
      const videoAsset = await generateVideo(imageAsset.url, prompts.video);
      manifest.heroes[key as keyof typeof manifest.heroes].video = videoAsset.url;

      // Save manifest after each success
      saveManifest(manifest);

      console.log(`✅ Hero "${key}" complete\n`);

    } catch (error) {
      console.error(`❌ Failed to generate hero "${key}":`, error);
      throw error; // Stop on error
    }
  }

  // Generate portfolio assets (6 properties)
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  PART 2: PORTFOLIO ASSETS (6 properties)');
  console.log('═══════════════════════════════════════════════════════\n');

  let portfolioCount = 0;
  for (const property of PORTFOLIO_PROMPTS) {
    portfolioCount++;
    console.log(`\n[${portfolioCount}/6] Processing property: ${property.title}`);
    console.log('─'.repeat(60));

    try {
      const imageAsset = await generateImage(property.prompt);

      manifest.portfolio.push({
        id: property.id,
        title: property.title,
        location: property.location,
        image: imageAsset.url
      });

      // Save manifest after each success
      saveManifest(manifest);

      console.log(`✅ Property "${property.title}" complete\n`);

    } catch (error) {
      console.error(`❌ Failed to generate property "${property.title}":`, error);
      throw error; // Stop on error
    }
  }

  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  ✅ ALL ASSETS GENERATED SUCCESSFULLY');
  console.log('═══════════════════════════════════════════════════════\n');

  console.log('Summary:');
  console.log(`  • 4 hero images + 4 hero videos = 8 hero assets`);
  console.log(`  • 6 portfolio images`);
  console.log(`  • Total: 14 assets\n`);

  console.log('Manifest location:');
  console.log(`  📁 public/generated/manifest.json\n`);

  console.log('Next steps:');
  console.log(`  1. Verify all URLs in manifest.json`);
  console.log(`  2. Run: npm run dev`);
  console.log(`  3. Proceed with Phase 2 (Design System)\n`);
}

// Execute
generateAllAssets()
  .then(() => {
    console.log('🎉 Asset generation complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Asset generation failed:', error);
    process.exit(1);
  });
