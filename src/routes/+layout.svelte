<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class='bg-stone-900 flex flex-col items-center pt-30 px-10 min-h-screen text-white w-full'>
	{@render children()}
</div>
