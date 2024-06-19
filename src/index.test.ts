import { describe, it, expect } from 'vitest';
import is_channel_live from '../src/lib/is_channel_live';
import get_channels from './lib/get_channels';

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

	it('should return false for CheezyBubble', async () => {
		expect(await is_channel_live('CheezyBubble')).toBe(false);
	});

	it('should throw an error for a non-existent channel', async () => {
		await expect(is_channel_live('')).rejects.toThrow(
			'Failed to fetch https://youtube.com/@ with status 404.'
		);
	});
});

describe('get_channels test', () => {
	it('should return a string array', async () => {
		const channels = await get_channels();
		expect(channels).toBeInstanceOf(Array);
		channels.forEach((channel_id) => {
			expect(channel_id).toBeTypeOf('string');
		});
	});

	it('should have the expected data', async () => {
		const channels = await get_channels();
		expect(channels.length).toBeGreaterThanOrEqual(3);
		expect(channels[0]).toBe('StDominicsSanFrancisco');
	});
});
