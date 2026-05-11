<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const error = data.error;
	const city = data.city;
</script>

<div class="flex w-[90vw] max-w-[800px] flex-col items-center justify-center space-y-2 text-left">
	<p class="w-full">
		My name is Aditya and I'm a software engineer interested in building AI systems for critical
		industries like national security and healthcare. I study data science + ML at UCSD, where I
		help run <a href="https://www.sdx.community/chapters/ucsd" class="underline">SDx</a>.
	</p>
	<h1 class="mt-8 w-full text-lg font-bold">Currently</h1>
	<p class="w-full">
		Working with Central Valley businesses to deploy AI in industries like construction, oil & gas,
		etc.
	</p>
	<h1 class="mt-8 w-full text-lg font-bold">Previously</h1>
	<ul class="w-full list-decimal pl-8">
		<li>Took a gap year to build critical AI products for the US government at Palantir</li>
		<li>Deployed endpoint security products for mission-critical customers at Microsoft</li>
		<li>Worked on full-stack + agents + evals for lending + real estate companies at Cadre</li>
		<li>Prototyped coding agents to accelerate cancer genomics research at the Mesirov Lab</li>
		<li>
			Built Python library to streamline integration between internal LLM and LangChain at DoD
		</li>
		<li>
			Engineered tools to find areas underserved by food programs at Department of Agriculture
		</li>
	</ul>
	<h1 class="mt-8 w-full text-lg font-bold">Contact</h1>
	<p class="w-full">Always open to meeting people. Currently based in San Francisco.</p>
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
