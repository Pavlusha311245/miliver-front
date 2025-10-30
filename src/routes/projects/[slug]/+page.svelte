<script lang="ts">
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<h1 class="text-xl">{data.project.name}</h1>
<div>{@html data.project.description}</div>