<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	const error = data.error;
	const city = data.city;
	const linkClass =
		'text-zinc-100 underline decoration-zinc-100/40 underline-offset-4 hover:decoration-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100';

	const previous = [
		{
			org: 'Databricks',
			detail: 'Optimized state store operations for Spark streaming'
		},
		{
			org: 'Palantir',
			detail: 'Took a gap year to build critical AI products for the US government'
		},
		{
			org: 'Microsoft',
			detail: 'Deployed endpoint security products for mission-critical customers'
		},
		{
			org: 'Cadre',
			detail: 'Worked on full-stack + agents + evals for lending + real estate companies'
		},
		{
			org: 'Mesirov Lab',
			detail: 'Built coding agents to accelerate cancer genomics research'
		},
		{
			org: 'Department of Defense',
			detail: 'Prototyped AI-powered warfare simulations using graph agents'
		},
		{
			org: 'Department of Agriculture',
			detail: 'Engineered tools to find areas underserved by food programs'
		}
	];
</script>

<div class="flex w-full flex-col text-left">
	<p class="w-full leading-6">
		My name is Aditya and I'm a software engineer interested in building AI systems for critical
		industries like national security and healthcare. I study data science + ML at UCSD, where I
		help run
		<a href="https://www.sdx.community/chapters/ucsd" class={linkClass}>SDx</a>.
	</p>

	<section class="mt-10 w-full">
		<h2 class="text-lg font-normal text-zinc-400">Previously</h2>
		<ul class="mt-4 flex w-full flex-col gap-4">
			{#each previous as role (role.org)}
				<li>
					<p class="font-serif text-xl leading-snug text-zinc-100">{role.org}</p>
					<p class="mt-0.5 leading-6">{role.detail}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mt-10 w-full">
		<h2 class="text-lg font-normal text-zinc-400">Contact</h2>
		<p class="mt-2 w-full leading-6">
			Always open to meeting people. Currently based in San Francisco.
		</p>
		<div class="mt-3 flex w-full flex-row gap-4">
			<a href="https://www.linkedin.com/in/aditya-kakarla/" class={linkClass}>LinkedIn</a>
			<a href="https://github.com/adityakakarla" class={linkClass}>GitHub</a>
		</div>
	</section>

	{#if !error}
		<p class="mt-10 w-full text-zinc-400">
			Thanks for visiting from {city}!
		</p>
	{/if}
</div>
