<script lang="ts">
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<main class="container mx-auto p-4">

    <div class="space-x-4">
        <h1 class="text-xl inline-block">Projects</h1>
        <a href="/customers" class="text-xl text-gray-400 hover:underline">Customers</a>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each data.projects as project}
            <a href="/projects/{project.id}" class="border rounded-lg p-3 hover:bg-gray-200">{project.name}</a>
        {/each}
    </div>
</main>

<svelte:head>
    <title>Projects</title>
</svelte:head>