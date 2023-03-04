<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { subtractionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={subtractionsWithoutReagruping(36, 3)} />
</PageOutline>
