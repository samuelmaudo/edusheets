<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import PageOutline from '$components/PageOutline.svelte';
	import { divisions } from '$lib/arithmetic/functions';
</script>

<PageOutline>
	<ColumnarOperations operations={divisions(36, 2, 1)} />
</PageOutline>
