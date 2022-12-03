<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { additions } from '$lib/arithmetic/functions';
</script>

<ColumnarOperations operations={additions(24, 2, 4)} />
