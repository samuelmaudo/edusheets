<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { subtractions } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={subtractions(36, 3)} />
</PageOutline>
