<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { additionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<ColumnarOperations operations={additionsWithoutReagruping(36, 3)} />
