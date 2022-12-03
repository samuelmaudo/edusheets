<script lang="ts">
	import type { Operations } from '$lib/arithmetic/types';
	import ColumnarOperation from './ColumnarOperation.svelte';

	export let operations: Operations;
</script>

<div class="sheet">
	{#each operations as operation}
		<ColumnarOperation {operation} />
	{/each}
</div>

<style>
	.sheet {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		height: 100%;
		width: 100%;
	}
</style>
