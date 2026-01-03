from playwright.sync_api import sync_playwright
import os

# Create output directory
os.makedirs('screenshots', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})

    # Test each variant (port 3006 since 3000 was in use)
    urls = [
        ('http://localhost:3006', 'home'),
        ('http://localhost:3006/variant-a', 'variant-a'),
        ('http://localhost:3006/variant-b', 'variant-b'),
        ('http://localhost:3006/variant-c', 'variant-c'),
        ('http://localhost:3006/variant-d', 'variant-d'),
    ]

    for url, name in urls:
        try:
            page.goto(url, timeout=30000)
            page.wait_for_load_state('networkidle')

            # Take hero screenshot
            page.screenshot(path=f'screenshots/{name}-hero.png')
            print(f'Captured {name} hero')

            # Scroll down and take full page
            page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
            page.wait_for_timeout(1000)
            page.screenshot(path=f'screenshots/{name}-full.png', full_page=True)
            print(f'Captured {name} full page')

        except Exception as e:
            print(f'Error capturing {name}: {e}')

    browser.close()
    print('Done! Check screenshots folder')
