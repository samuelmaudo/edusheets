<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { subtractions } from '$lib/arithmetic/functions';
</script>

<h1>Subtractions of two digits:</h1>
<ColumnarOperations operations={subtractions(36, 2)} />

<style>
	h1 {
		display: none;
	}
</style>
