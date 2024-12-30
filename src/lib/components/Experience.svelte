<script>
    let {title, company, tags, description} = $props();
</script>

<div class="rounded-lg overflow-hidden border-2 border-black">
    <div class="p-6">
      <div class="flex flex-col mb-4">
        <h2 class="text-xl font-bold text-gray-800">{title}</h2>
        <h3 class="text-md font-semibold text-gray-600">{company}</h3>
      </div>
      <div class="mb-4">
        {#each tags as tag}
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        {/each}
      </div>
      <ul class="list-disc list-inside text-md">
        {#each description as descriptionPoint}
          <li>{descriptionPoint}</li>
        {/each}
      </ul>
    </div>
  </div>