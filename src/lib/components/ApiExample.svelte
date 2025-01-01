<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Clipboard, Check } from 'lucide-svelte';

	let { title, description, endpoint } = $props();
	let copied = $state(false);

	function copyToClipboard() {
		const curlCommand = `curl -X GET https://api.adityakakarla.com/${endpoint}`;
		navigator.clipboard.writeText(curlCommand).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		});
	}
</script>

<div class="flex flex-col border-t-2 border-black py-8">
	<h1 class="text-3xl font-bold mb-4">{title}</h1>
	<div class='flex flex-row space-x-24 justify-between text-sm'>
		<p class='w-48 md:w-72 lg:w-96'>{description}</p>
		<div class='bg-gray-600 text-white h-fit px-2 py-1 rounded-lg flex items-center'>
			<p class="mr-2">curl -X GET https://api.adityakakarla.com/{endpoint}</p>
			<button
				onclick={copyToClipboard}
				class="text-white p-1 rounded transition-colors duration-200 hover:bg-gray-500"
				aria-label="Copy to clipboard"
			>
				{#if copied}
					<div >
						<Check size={18} class="text-green-400" />
					</div>
				{:else}
					<Clipboard size={18} />
				{/if}
			</button>
		</div>
	</div>
</div>