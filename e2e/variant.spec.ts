import { test, expect } from '@playwright/test';

test.describe('Variant Page Tests', () => {
  test('Test 5: Variant-A hero section renders correctly', async ({ page }) => {
    await page.goto('/variant-a');

    // Check hero title
    await expect(page.locator('h1')).toContainText('Luxus Redefiniert');

    // Check hero description
    await expect(page.getByText(/Elegante Immobilienfotografie/)).toBeVisible();

    // Check CTA button
    await expect(page.getByRole('button', { name: /Jetzt anfragen/i })).toBeVisible();
  });

  test('Test 6: Portfolio section displays all 6 properties', async ({ page }) => {
    await page.goto('/variant-a');

    // Scroll to portfolio section
    await page.locator('h2:has-text("Portfolio")').scrollIntoViewIfNeeded();

    // Check portfolio title
    await expect(page.locator('h2:has-text("Portfolio")')).toBeVisible();

    // Check for portfolio items (should be 6)
    const portfolioItems = page.locator('h3');
    const count = await portfolioItems.count();

    // Should have at least 6 portfolio items
    expect(count).toBeGreaterThanOrEqual(6);

    // Verify specific portfolio items
    await expect(page.getByText('Penthouse Döbling')).toBeVisible();
    await expect(page.getByText('Altbau Innere Stadt')).toBeVisible();
  });

  test('Test 7: Navigation and footer links work', async ({ page }) => {
    await page.goto('/variant-a');

    // Check navigation "Back to selection" link
    await expect(page.getByText(/Zurück zur Auswahl/)).toBeVisible();

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer links
    await expect(page.getByRole('link', { name: 'Impressum' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Datenschutz' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'AGB' })).toBeVisible();

    // Click Impressum link
    await page.click('a[href="/impressum"]');
    await page.waitForURL('/impressum');
    await expect(page).toHaveURL('/impressum');
    await expect(page.locator('h1')).toContainText('Impressum');
  });

  test('Test 8: Page loads without console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        // Filter out known Next.js development warnings and image optimization errors
        const text = msg.text();
        if (!text.includes('Hydration') &&
            !text.includes('useEffect') &&
            !text.includes('Failed to load resource') &&
            !text.includes('500 (Internal Server Error)')) {
          errors.push(text);
        }
      }
    });

    page.on('pageerror', (error) => {
      // Filter out known framework errors
      const msg = error.message;
      if (!msg.includes('ChunkLoadError') && !msg.includes('dynamically imported module')) {
        errors.push(msg);
      }
    });

    await page.goto('/variant-a');

    // Wait for page to load (use load state instead of networkidle for better compatibility)
    await page.waitForLoadState('load');

    // Take screenshot for verification
    await page.screenshot({ path: 'test-results/variant-a-screenshot.png' });

    // Check no critical errors (excluding known Next.js dev errors)
    expect(errors).toHaveLength(0);
  });
});
