<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { additions } from '$lib/arithmetic/functions';
</script>

<h1>Additions of two digits:</h1>
<ColumnarOperations operations={additions(24, 2, 4)} />

<style>
	h1 {
		display: none;
	}
</style>
