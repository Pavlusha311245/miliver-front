<script lang="ts">
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<div>
    <div class="space-x-4">
        <h1 class="text-xl inline-block">Customers</h1>
        <a href="/projects" class="text-xl text-gray-400 hover:underline">Projects</a>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each data.customers as customer}
            <a href="/customers/{customer.id}"
               class="border border-b-6 rounded-lg p-3 hover:border-b hover:mt-1">{customer.name}</a>
        {/each}
    </div>
</div>

<svelte:head>
    <title>Customers</title>
</svelte:head>