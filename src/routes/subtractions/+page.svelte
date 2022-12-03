<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { subtractions } from '$lib/arithmetic/functions';
</script>

<ColumnarOperations operations={subtractions(36, 2)} />
