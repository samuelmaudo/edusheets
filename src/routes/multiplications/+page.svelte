<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { multiplications } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={multiplications(36, 1, 1)} />
</PageOutline>
