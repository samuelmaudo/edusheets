<script>
	import '../app.css';
	import PageOutline from '$components/PageOutline.svelte';
	import { Size } from '$lib/display/types';
	import AppHeader from '$components/AppHeader.svelte';
	import AppSidebar from '$components/AppSidebar.svelte';
</script>

<main class="app">
	<header class="app-header">
		<AppHeader></AppHeader>
	</header>
	<div class="app-body">
		<div class="app-content">
			<PageOutline size={Size.A4}>
				<slot />
			</PageOutline>
		</div>
		<aside class="app-sidebar">
			<AppSidebar></AppSidebar>
		</aside>
	</div>
</main>

<style>
	.app {
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
	.app-header {
		flex: none;
	}
	.app-body {
		display: flex;
		flex: 1 1 auto;
		flex-flow: row nowrap;
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
	.app-sidebar {
		display: none;
		flex: none;
		overflow-x: hidden;
		overflow-y: auto;
		width: auto;
	}
	.app-content {
		flex: 1 1 auto;
		overflow-x: hidden;
		overflow-y: auto;
	}
	@media (min-width: 1280px) {
		.app-sidebar {
			display: block;
		}
	}
	@media print {
		.app,
		.app-body,
		.app-content {
			background: initial !important;
			border: initial !important;
			border-radius: initial !important;
			box-shadow: initial !important;
			margin: 0 !important;
			height: initial !important;
			padding: 0 !important;
			width: initial !important;
		}
		.app-header,
		.app-sidebar {
			display: none;
		}
	}
</style>
