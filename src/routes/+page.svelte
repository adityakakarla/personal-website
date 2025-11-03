<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const error = data.error;
	const city = data.city;
</script>

<div class="flex w-[90vw] max-w-[800px] flex-col items-center justify-center space-y-2 text-left">
	<h1 class="w-full text-2xl font-bold">Aditya Kakarla</h1>
	<p class="w-full">I'm interested in solving hard + interesting problems with AI.</p>
	<h1 class="mt-8 w-full text-lg font-bold">Currently</h1>
	<p class="w-full">Taking a gap quarter to build AI tools for the US government @ Palantir</p>
	<h1 class="mt-8 w-full text-lg font-bold">Previously</h1>
	<ul class="w-full list-decimal pl-8">
		<li>Deployed endpoint security products for mission-critical customers at Microsoft</li>
		<li>Worked at USDA and DoD, where I worked on cool projects (like optimizing SNAP)</li>
		<li>
			Spent 7 months building a coding agent to accelerate cancer genomics research at the Mesirov
			Lab
		</li>
	</ul>
	<h1 class="mt-8 w-full text-lg font-bold">Contact</h1>
	<p class="w-full">Always open to meeting people. Currently based in the DC metro area.</p>
	<div class="flex w-full flex-row space-x-3">
		<p>
			<a href="https://www.linkedin.com/in/aditya-kakarla/" class="underline hover:text-blue-400"
				>LinkedIn</a
			>
		</p>
		<p>
			<a href="https://github.com/adityakakarla" class="underline hover:text-blue-400">GitHub</a>
		</p>
	</div>
	{#if !error}
		<p class="mt-8 w-full italic">Thanks for visiting from {city}!</p>
	{/if}
</div>
