<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { additions } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={additions(36, 1, 2)} />
</PageOutline>
