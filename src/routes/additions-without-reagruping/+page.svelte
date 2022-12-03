<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { additionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<h1>Additions of three digits without reagruping:</h1>
<ColumnarOperations operations={additionsWithoutReagruping(36, 3)} />

<style>
	h1 {
		display: none;
	}
</style>
