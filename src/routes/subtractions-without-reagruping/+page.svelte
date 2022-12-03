<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { subtractionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<h1>Subtractions of three digits without reagruping:</h1>
<ColumnarOperations operations={subtractionsWithoutReagruping(36, 3)} />

<style>
	h1 {
		display: none;
	}
</style>
