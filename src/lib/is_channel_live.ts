function does_text_contain(text: string, search: string): boolean {
	return text.indexOf(search) !== -1;
}

function is_channel_live(channel_id: string): Promise<boolean> {
	return new Promise(async (resolve, reject) => {
		const url = `https://youtube.com/@${channel_id}`;
		const response = await fetch(url);
		if (response.status !== 200) {
			reject(`Failed to fetch ${url} with status ${response.status}.`);
		}
		const text = await response.text();
		resolve(does_text_contain(text, `"text":" watching"`));
	});
}

export default is_channel_live;
