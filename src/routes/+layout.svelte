<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Aditya Kakarla</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col items-center bg-stone-900 px-10 pt-30 text-white">
	{@render children()}
</div>
