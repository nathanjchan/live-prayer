function get_channels(): Promise<string[]> {
	return new Promise(async (resolve, reject) => {
		const response = await fetch('https://live-prayer-static.pages.dev/channels.json');
		if (response.status !== 200) {
			reject(`Failed to fetch channel list with status ${response.status}.`);
		}
		const channels = await response.json();
		resolve(channels);
	});
}

export default get_channels;
