<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';

    let {children} = $props();
    import "../app.css";
</script>

<svelte:head>
    <link rel="icon" href={favicon}/>
</svelte:head>

<main class="container mx-auto p-4">
    {@render children?.()}
</main>
