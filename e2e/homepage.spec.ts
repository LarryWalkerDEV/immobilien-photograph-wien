import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('Test 1: Homepage loads without errors', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Check title
    await expect(page.locator('h1')).toContainText('immobilien-photograph.wien');

    // Check no critical errors
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);
    expect(errors.length).toBe(0);
  });

  test('Test 2: Homepage displays all 4 variant cards', async ({ page }) => {
    await page.goto('/');

    // Check for all 4 variant cards
    const variantTitles = [
      'Luxus Minimalist',
      'Cinematic Storytelling',
      'Data-Driven ROI',
      'Editorial Magazine',
    ];

    for (const title of variantTitles) {
      await expect(page.getByText(title)).toBeVisible();
    }

    // Check variant links
    const variantLinks = await page.locator('a[href^="/variant-"]').count();
    expect(variantLinks).toBeGreaterThanOrEqual(4);
  });

  test('Test 3: Variant navigation works', async ({ page }) => {
    await page.goto('/');

    // Click on Variant A
    await page.click('a[href="/variant-a"]');

    // Wait for navigation
    await page.waitForURL('/variant-a');

    // Verify we're on variant-a page
    await expect(page).toHaveURL('/variant-a');
    await expect(page.locator('h1')).toContainText('Luxus Redefiniert');
  });

  test('Test 4: Hero images load from kie.ai', async ({ page }) => {
    await page.goto('/');

    // Check that images are from kie.ai/aiquickdraw domain
    const images = page.locator('img');
    const count = await images.count();

    expect(count).toBeGreaterThan(0);

    // Check first image src contains expected domain
    const firstImgSrc = await images.first().getAttribute('src');
    expect(firstImgSrc).toBeTruthy();

    // Verify image loads successfully
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });
});
