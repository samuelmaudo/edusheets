<script lang="ts">
    import { page } from '$app/stores';

    export let url: string;
</script>

<a href="{url}" class:active={$page.url.pathname === url}>
    <slot />
</a>

<style>
    a {
        border-radius: 2rem;
        color: #e0e9ef;
        display: block;
        padding: .5rem 1rem;
        text-decoration: none;
        white-space: nowrap;
    }
    a:hover {
        background-color: #464857;
    }
    a.active {
        background-color: #4BA3CC !important;
        color: white;
    }
</style>