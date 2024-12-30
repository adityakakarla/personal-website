<script>
    let {title, items} = $props();
</script>

<h2 class="text-2xl">
    {title}
    <ul class="text-xl list-disc list-inside mt-2">
      {#each items as item}
      <li>{item}</li>
      {/each}
    </ul>
  </h2>