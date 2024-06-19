function does_text_contain(text: string, search: string): boolean {
	return text.indexOf(search) !== -1;
}

async function is_channel_live(channel_id: string): Promise<boolean> {
	const url = `https://youtube.com/@${channel_id}`;
	return await fetch(url).then(async (response) => {
		if (response.status !== 200) {
			throw new Error(`Failed to fetch ${url} with status ${response.status}.`);
		}
		const text = await response.text();
		return does_text_contain(text, `"text":" watching"`);
	});
}

export default is_channel_live;
