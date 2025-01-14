<script lang="ts">
	let { title, items } = $props();
</script>

<!-- <div class="rounded-lg bg-white p-4 text-center border-2 border-black">
	<h2 class="text-xl font-bold">
		{title}
	</h2>
</div> -->
<div class="w-fit rounded-lg bg-white p-4 border-2 border-black">
	<ul class="mt-2 list-inside list-disc text-lg">
		{#each items as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
