<script lang="ts">
	import type { ChainedOperations as Operations } from '$lib/arithmetic/types';
	import { chunk } from '$lib/arrays';

	export let operations: Operations;

	$: rows = chunk(operations, 5);
	$: lastRow = rows.length - 1;
	$: lastColumn = rows[lastRow].length - 1;

	const formatter = Intl.NumberFormat('es-ES', { signDisplay: 'never' });
</script>

<div class="board">
	{#each rows as operations, i}
		<div class="row">
			{#each operations as operation, j}
				<div class="item result">
					{#if i == 0 && j == 0}
						{operation.previousResult}
					{/if}
				</div>
				<div class="item operation">
					{operation.operator}&nbsp;{formatter.format(operation.operand)}
				</div>
				{#if i == lastRow && j == lastColumn}
					<div class="item result">
						{operation.result}
					</div>
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	.board {
		font-family: 'Sacramento', cursive;
		font-weight: bold;
		line-height: 2em;
		text-align: center;
		width: 100%;
	}
	.row {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
		width: 100%;
	}
	.row:nth-child(even) {
		flex-direction: row-reverse;
	}
	.item {
		align-items: center;
		aspect-ratio: 1 / 1;
		display: flex;
		justify-content: center;
		width: 11.111111%;
	}
	.item:nth-child(10n) {
		align-self: center;
	}
	.operation {
		align-self: center;
		background-clip: content-box;
		background-color: #888888;
		color: white;
		padding: 0.8em 0;
	}
	.operation:nth-child(10n) {
		padding: 0 0.8em;
	}
	.result {
		background-color: #e7e7e7;
		border: 0.2em solid #555555;
		border-radius: 0.6em;
	}
</style>
