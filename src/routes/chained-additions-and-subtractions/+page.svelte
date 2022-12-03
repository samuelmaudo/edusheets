<script lang="ts">
	import ChainedOperations from '$components/ChainedOperations.svelte';
	import { chainedAdditionsAndSubtractions } from '$lib/arithmetic/functions';
</script>

<ChainedOperations operations={chainedAdditionsAndSubtractions(34, 2)} />
