import { describe, it, expect } from 'vitest';
import is_channel_live from '../src/lib/is_channel_live';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('is_channel_live test', () => {
	it('should return a boolean for PewDiePie', async () => {
		expect(typeof (await is_channel_live('PewDiePie'))).toBe('boolean');
	});

	it('should return true for LofiGirl', async () => {
		expect(await is_channel_live('LofiGirl')).toBe(true);
	});

	it('should return false for honeybbqglaze5522', async () => {
		expect(await is_channel_live('honeybbqglaze5522')).toBe(false);
	})

	it('should throw an error for a non-existent channel', async () => {
		await expect(is_channel_live(''))
			.rejects.toThrow('Failed to fetch https://youtube.com/@ with status 404.');
	})
});
 