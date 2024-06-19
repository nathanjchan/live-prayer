<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let live_channels = [];
	let non_live_channels = [];
	for (let channel in data.channel_status) {
		if (data.channel_status[channel]) {
			live_channels.push(channel);
		} else {
			non_live_channels.push(channel);
		}
	}
</script>

<h1>Catholic Live Prayer</h1>

<h2>Live Channels</h2>
<ul>
	{#each live_channels as channel}
		<li>{channel}</li>
	{/each}
</ul>

<h2>Non-Live Channels</h2>
<ul>
	{#each non_live_channels as channel}
		<li>{channel}</li>
	{/each}
</ul>
