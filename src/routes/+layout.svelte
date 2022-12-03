<script>
	import '../app.css';
	import PageOutline from '$components/PageOutline.svelte';
	import { Size } from '$lib/display/types';
</script>

<PageOutline size={Size.A4}>
	<slot />
</PageOutline>
