<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col py-4 px-10 items-center">
	<Header />
	<main class="flex-grow flex-col justify-center mx-auto">
	  {@render children()}
	</main>
  </div>