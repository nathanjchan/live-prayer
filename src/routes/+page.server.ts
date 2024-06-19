import get_channels from '$lib/get_channels';
import is_channel_live from '$lib/is_channel_live';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let channels = [];
	channels = await get_channels();
	type status = { [key: string]: boolean };
	const channel_status: status = {};
	for (const channel of channels) {
		channel_status[channel] = await is_channel_live(channel);
	}
	return { channel_status };
}
