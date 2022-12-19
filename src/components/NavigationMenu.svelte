<script lang="ts">
	import Item from './NavigationMenuItem.svelte';
</script>

<nav>
    <h1>Operaciones aritméticas:</h1>
    <ul>
        <li><Item url="/additions">Sumas</Item></li>
        <li><Item url="/additions-without-reagruping">Sumas sin llevar</Item></li>
        <li><Item url="/subtractions">Restas</Item></li>
        <li><Item url="/subtractions-without-reagruping">Restas sin llevar</Item></li>
        <li><Item url="/chained-additions-and-subtractions">Sumas y restas encadenadas</Item></li>
    </ul>
</nav>

<style>
    nav {
        background-color: #5d606f;
        color: white;
        font-size: 1.125rem;
        height: 100%;
        padding: 1rem 1rem 5rem;
        width: 22rem;
    }
    h1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        margin-bottom: 1rem;
        padding: 0 1rem;
    }
    li {
        margin: .25rem 0;
    }
</style>