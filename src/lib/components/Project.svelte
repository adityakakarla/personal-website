<script>
    let {name, tags, link, description} = $props();
</script>

<div class="rounded-lg overflow-hidden border-2 border-black">
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <h2 class="text-xl font-bold text-gray-800">{name}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer" class="font-semibold hover:text-sky-800">
          View Project
        </a>
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