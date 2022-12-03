<script lang="ts">
	import ColumnarOperations from '$components/ColumnarOperations.svelte';
	import { subtractionsWithoutReagruping } from '$lib/arithmetic/functions';
</script>

<ColumnarOperations operations={subtractionsWithoutReagruping(36, 3)} />
