<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Aditya Kakarla</title>
</svelte:head>

<div class="min-h-screen w-full flex flex-col items-center px-10 py-4 relative">
	<Header />
	<main class="mx-auto flex-grow flex-col justify-center">
	  {@render children()}
	</main>
	<div
	  class="absolute inset-0 -z-10 w-full min-h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
	>
	  <div
		class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#b3e0fc,transparent)]"
	  ></div>
	</div>
  </div>
  