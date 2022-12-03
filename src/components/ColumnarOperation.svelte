<script lang="ts">
	import type { Operation } from '$lib/arithmetic/types';

	export let operation: Operation;
</script>

<p class="operation">
	<span class="operands">
		{#each operation.operands as operand, i}
			<span class="operand">
				{#if i > 0}
					<span class="operator">{operation.operator}</span>
				{/if}
				{#each '' + operand as digit}
					<span class="digit">{digit}</span>
				{/each}
			</span>
		{/each}
	</span>
	<span class="line">=</span>
	<span class="result" />
</p>

<style>
	.operation {
		display: flex;
		flex-flow: column nowrap;
		padding: 1em;
	}
	.operands {
		display: block;
	}
	.operand,
	.result {
		display: block;
		font-family: 'Sacramento', cursive;
		font-size: large;
		height: 2em;
		line-height: 2em;
		overflow: hidden;
		padding: 0 0.6em;
		text-align: right;
	}
	.digit {
		display: inline-block;
		text-align: center;
		width: 0.8em;
	}
	.operator {
		display: none;
	}
	.operand:last-child .operator {
		display: inline-block;
	}
	.line {
		border-top: 1px solid #000000;
		display: block;
		font-size: 0;
	}
	.result {
		padding-top: 0.3em;
	}
</style>
