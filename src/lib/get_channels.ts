async function get_channels(): Promise<string[]> {
	return await fetch('https://live-prayer-static.pages.dev/channels.json').then((response) => {
		if (response.status !== 200) {
			throw new Error(`Failed to fetch channel list with status ${response.status}.`);
		}
		return response.json();
	});
}

export default get_channels;
