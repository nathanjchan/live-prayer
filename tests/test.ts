import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('home page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h2')).toHaveCount(2);
});

test('home page has expected links', async ({ page }) => {
	await page.goto('/');
	const links = page.locator('a');
	let count = 0;
	for (let i = 0; i < (await links.count()); i++) {
		const href = await links.nth(i).getAttribute('href');
		if (href && href.startsWith('https://www.youtube.com/@StDominicsSanFrancisco')) {
			count++;
		}
	}
	expect(count).toBeGreaterThan(0);
});
