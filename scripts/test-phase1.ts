/**
 * Phase 1 Validation Tests
 * Tests kie.ai API connectivity, authentication, and asset generation
 * MUST pass 5/6 tests (90%) before proceeding to Phase 2
 */

// MUST load dotenv FIRST before any other imports
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fetch } from 'undici';

// Load environment BEFORE importing kie-api
const envPath = path.join(process.cwd(), '.env.local');
const envResult = dotenv.config({ path: envPath });

if (envResult.error) {
  console.error('❌ Failed to load .env.local:', envResult.error);
  process.exit(1);
}

if (!process.env.KIE_API_KEY) {
  console.error('❌ KIE_API_KEY not found in .env.local');
  console.error(`   Checked path: ${envPath}`);
  process.exit(1);
}

console.log(`✅ Loaded KIE_API_KEY from .env.local`);

// NOW import modules that use environment variables
import * as fs from 'fs';
import { generateImage, generateVideo, createImageTask } from '../src/lib/kie-api';

interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  measurement?: string;
}

const results: TestResult[] = [];

async function urlExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

async function test1_ApiConnectivity(): Promise<TestResult> {
  console.log('\n🧪 Test 1: kie.ai API Connectivity');
  try {
    // Test connectivity by creating a simple task
    const response = await fetch('https://api.kie.ai/api/v1/jobs/createTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KIE_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'seedream/4.5-text-to-image',
        input: {
          prompt: 'test connectivity',
          aspect_ratio: '16:9',
          quality: 'high'
        }
      }),
    });

    const data = await response.json();
    console.log('   API Response:', JSON.stringify(data, null, 2));

    const passed = response.ok && data.code === 200;
    const measurement = `HTTP: ${response.status}, API code: ${data.code}`;

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'API Connectivity', passed, measurement, error: data.msg };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'API Connectivity',
      passed: false,
      error: `Cannot reach API: ${error.message}`,
      measurement: 'Network error'
    };
  }
}

async function test2_ApiKeyValidation(): Promise<TestResult> {
  console.log('\n🧪 Test 2: API Key Validation');
  try {
    const taskId = await createImageTask('test prompt for validation');
    const passed = !!taskId && taskId.length > 0;
    const measurement = passed ? `Task ID received: ${taskId.substring(0, 20)}...` : 'No task ID';

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'API Key Validation', passed, measurement };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'API Key Validation',
      passed: false,
      error: error.message,
      measurement: 'API key invalid or missing'
    };
  }
}

async function test3_ImageGeneration(): Promise<TestResult> {
  console.log('\n🧪 Test 3: Single Image Generation');
  try {
    const image = await generateImage('Vienna luxury apartment interior, modern design');
    const urlValid = image.url.includes('http');
    const urlAccessible = await urlExists(image.url);
    const passed = urlValid && urlAccessible;
    const measurement = `URL: ${image.url.substring(0, 60)}..., Accessible: ${urlAccessible}`;

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'Image Generation', passed, measurement };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'Image Generation',
      passed: false,
      error: error.message,
      measurement: 'Image generation failed'
    };
  }
}

async function test4_VideoGeneration(): Promise<TestResult> {
  console.log('\n🧪 Test 4: Single Video Generation');
  try {
    // First generate an image for video input
    console.log('   Generating test image first...');
    const image = await generateImage('Vienna apartment living room');

    console.log('   Generating video from image...');
    const video = await generateVideo(image.url, 'slow camera pan across room');
    const urlValid = video.url.includes('http');
    const urlAccessible = await urlExists(video.url);
    const passed = urlValid && urlAccessible;
    const measurement = `URL: ${video.url.substring(0, 60)}..., Accessible: ${urlAccessible}`;

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'Video Generation', passed, measurement };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'Video Generation',
      passed: false,
      error: error.message,
      measurement: 'Video generation failed'
    };
  }
}

async function test5_FullAssetGeneration(): Promise<TestResult> {
  console.log('\n🧪 Test 5: Full Asset Generation (14 assets)');
  console.log('⚠️  This test will take 10-15 minutes...');

  try {
    // Run the full generation script
    const { execSync } = require('child_process');
    execSync('npx tsx scripts/generate-assets.ts', {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    // Check if manifest was created
    const manifestPath = path.join(process.cwd(), 'public', 'generated', 'manifest.json');
    if (!fs.existsSync(manifestPath)) {
      throw new Error('manifest.json not created');
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

    // Count assets
    let assetCount = 0;
    assetCount += Object.keys(manifest.heroes).length * 2; // Each hero has image + video
    assetCount += manifest.portfolio.length; // Each portfolio item has image

    const passed = assetCount === 14;
    const measurement = `Assets created: ${assetCount}/14`;

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'Full Asset Generation', passed, measurement };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'Full Asset Generation',
      passed: false,
      error: error.message,
      measurement: 'Asset generation incomplete'
    };
  }
}

async function test6_ManifestValidation(): Promise<TestResult> {
  console.log('\n🧪 Test 6: Manifest Structure Validation');
  try {
    const manifestPath = path.join(process.cwd(), 'public', 'generated', 'manifest.json');
    if (!fs.existsSync(manifestPath)) {
      throw new Error('manifest.json does not exist');
    }

    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

    // Validate structure
    const checks = [
      { name: 'heroes.luxusMinimalist.image', value: manifest.heroes?.luxusMinimalist?.image },
      { name: 'heroes.luxusMinimalist.video', value: manifest.heroes?.luxusMinimalist?.video },
      { name: 'heroes.cinematicStorytelling.image', value: manifest.heroes?.cinematicStorytelling?.image },
      { name: 'heroes.cinematicStorytelling.video', value: manifest.heroes?.cinematicStorytelling?.video },
      { name: 'heroes.dataRoiDriven.image', value: manifest.heroes?.dataRoiDriven?.image },
      { name: 'heroes.dataRoiDriven.video', value: manifest.heroes?.dataRoiDriven?.video },
      { name: 'heroes.editorialMagazine.image', value: manifest.heroes?.editorialMagazine?.image },
      { name: 'heroes.editorialMagazine.video', value: manifest.heroes?.editorialMagazine?.video },
      { name: 'portfolio (6 items)', value: manifest.portfolio?.length === 6 }
    ];

    const failedChecks = checks.filter(c => !c.value);
    const passed = failedChecks.length === 0;
    const measurement = passed ? 'All fields present' : `Missing: ${failedChecks.map(c => c.name).join(', ')}`;

    console.log(passed ? '✅ PASSED' : '❌ FAILED', measurement);
    return { name: 'Manifest Validation', passed, measurement };
  } catch (error: any) {
    console.log('❌ FAILED:', error.message);
    return {
      name: 'Manifest Validation',
      passed: false,
      error: error.message,
      measurement: 'Manifest structure invalid'
    };
  }
}

async function runAllTests() {
  console.log('═══════════════════════════════════════════════════════');
  console.log('  PHASE 1 VALIDATION TESTS');
  console.log('  Minimum required: 5/6 tests passing (90%)');
  console.log('═══════════════════════════════════════════════════════');

  // Run tests sequentially
  results.push(await test1_ApiConnectivity());

  if (results[0].passed) {
    console.log('\n   Waiting 2 seconds before next test...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    results.push(await test2_ApiKeyValidation());
  } else {
    console.log('\n⚠️  Skipping remaining tests - API unreachable');
    results.push({ name: 'API Key Validation', passed: false, measurement: 'Skipped - API unreachable' });
    results.push({ name: 'Image Generation', passed: false, measurement: 'Skipped - API unreachable' });
    results.push({ name: 'Video Generation', passed: false, measurement: 'Skipped - API unreachable' });
    results.push({ name: 'Full Asset Generation', passed: false, measurement: 'Skipped - API unreachable' });
    results.push({ name: 'Manifest Validation', passed: false, measurement: 'Skipped - API unreachable' });
  }

  if (results[1].passed) {
    results.push(await test3_ImageGeneration());
    results.push(await test4_VideoGeneration());
    results.push(await test5_FullAssetGeneration());
    results.push(await test6_ManifestValidation());
  }

  // Generate report
  console.log('\n═══════════════════════════════════════════════════════');
  console.log('  TEST RESULTS');
  console.log('═══════════════════════════════════════════════════════');

  const passCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  const passRate = Math.round((passCount / totalCount) * 100);

  results.forEach((result, index) => {
    console.log(`\n${index + 1}. ${result.name}`);
    console.log(`   Status: ${result.passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`   Measurement: ${result.measurement || 'N/A'}`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });

  console.log('\n═══════════════════════════════════════════════════════');
  console.log(`  PHASE 1 COMPLETE: ${passCount}/${totalCount} tests passed (${passRate}%)`);
  console.log('═══════════════════════════════════════════════════════');

  // Save results
  const resultsDir = path.join(process.cwd(), 'test-results');
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  const report = {
    timestamp: new Date().toISOString(),
    passCount,
    totalCount,
    passRate,
    threshold: 90,
    passed: passRate >= 90,
    results
  };

  fs.writeFileSync(
    path.join(resultsDir, 'phase1.json'),
    JSON.stringify(report, null, 2)
  );

  fs.writeFileSync(
    path.join(resultsDir, 'phase1.txt'),
    `Phase 1 Validation Results
Generated: ${new Date().toISOString()}

Pass Rate: ${passCount}/${totalCount} (${passRate}%)
Threshold: 90%
Status: ${passRate >= 90 ? 'PASSED' : 'FAILED'}

Individual Tests:
${results.map((r, i) => `${i + 1}. ${r.name}: ${r.passed ? 'PASSED' : 'FAILED'} - ${r.measurement}`).join('\n')}

${passRate >= 90 ? '✅ Phase 1 validation passed. Proceed to Phase 2.' : '❌ Phase 1 validation failed. Fix issues and retry.'}
`
  );

  console.log(`\n📄 Results saved to test-results/phase1.json and phase1.txt`);

  if (passRate < 90) {
    console.log('\n❌ PHASE 1 FAILED - Cannot proceed to Phase 2');
    console.log('   Fix the failing tests and run again');
    process.exit(1);
  } else {
    console.log('\n✅ PHASE 1 VALIDATION PASSED');
    console.log('   Ready to proceed to Phase 2');
    process.exit(0);
  }
}

// Run tests
runAllTests().catch(error => {
  console.error('\n💥 Fatal error running tests:', error);
  process.exit(1);
});
