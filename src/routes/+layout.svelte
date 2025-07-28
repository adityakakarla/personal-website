<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Adi's Website</title>
</svelte:head>

<div class='bg-stone-900 flex flex-col items-center pt-30 px-10 min-h-screen text-white w-full'>
	{@render children()}
</div>
