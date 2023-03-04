<script lang="ts">
	import ChainedOperations from '$components/ChainedOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { chainedAdditionsAndSubtractions } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ChainedOperations operations={chainedAdditionsAndSubtractions(34, 2)} />
</PageOutline>
