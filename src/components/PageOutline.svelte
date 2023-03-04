<script lang="ts">
	import { Size } from '$lib/display/types';

	export let size = Size.A4;
</script>

<div
	class="page"
	class:a4={size == Size.A4}
	class:legal={size == Size.Legal}
	class:letter={size == Size.Letter}
>
	<slot />
</div>

<style>
	.page {
		background: #fff;
		box-shadow: 0 3px 6px rgba(25, 25, 25, 0.25);
		margin: 1cm auto;
		outline: 0;
		overflow: hidden;
	}
	.page.a4 {
		height: 29.7cm;
		padding: 2cm 1.5cm;
		width: 21cm;
	}
	.page.legal {
		height: 35.6cm;
		padding: 2cm 1.5cm;
		width: 21.6cm;
	}
	.page.letter {
		height: 27.9cm;
		padding: 2cm 1.5cm;
		width: 21.6cm;
	}
	@media print {
		.page {
			background: initial !important;
			border: initial !important;
			border-radius: initial !important;
			box-shadow: initial !important;
			margin: 0 !important;
			height: initial !important;
			padding: 0 !important;
			page-break-after: always;
			width: initial !important;
		}
	}
</style>
