<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { additionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={additionsWithoutReagruping(36, 2)} />
</PageOutline>
