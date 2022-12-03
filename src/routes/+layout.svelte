<script>
	import '../app.css';
	import Page from '$components/Page.svelte';
	import { Size } from '$lib/display/types';
</script>

<Page size={Size.A4}>
	<slot />
</Page>
