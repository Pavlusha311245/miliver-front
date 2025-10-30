<script lang="ts">
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<div>
    <div class="space-x-4">
        <h1 class="text-xl inline-block">Projects</h1>
        <a href="/customers" class="text-xl text-gray-400 hover:underline">Customers</a>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each data.projects as project}
            <a href="/projects/{project.id}" class="border border-b-6 rounded-lg p-3 hover:border-b hover:mt-1">{project.name}</a>
        {/each}
    </div>
</div>

<svelte:head>
    <title>Projects</title>
</svelte:head>