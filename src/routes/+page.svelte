<script>
  import get_channels from '$lib/get_channels';
	import is_channel_live from '$lib/is_channel_live';
	import { onMount } from 'svelte';

  let channels = [];
  /**
	 * @type {string[]}
	 */
  let live_channels = [];
    /**
	 * @type {string[]}
	 */
  let non_live_channels = [];

	onMount(async () => {
    channels = await get_channels();
    console.log(channels);
    channels.forEach(async channel => {
      if (await is_channel_live(channel)) {
        live_channels.push(channel);
      } else {
        non_live_channels.push(channel);
      }
    })
	});
</script>

<h1>Catholic Live Prayer</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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