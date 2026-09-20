<script lang="ts">
	const years = [
		{
			year: 2026,
			projects: [
				{
					name: 'Apex',
					href: 'https://github.com/adityakakarla/apex-v2',
					detail:
						'Rust + Svelte desktop app that lets Claude Code vibecode courses for topics you want to learn about'
				},
				{
					name: 'Lumber',
					href: 'https://github.com/adityakakarla/lumber',
					detail:
						'Generate realistic-ish logs to learn bash/CLI skills for interviews/general practice'
				},
				{
					name: 'Fuji',
					href: 'https://github.com/adityakakarla/fuji',
					detail:
						'Rust CLI tool to auto-trade Kalshi F1 markets with a Grok agent hooked up with Kalshi/F1 API calls'
				},
				{
					name: 'Big File Scanner',
					href: 'https://github.com/adityakakarla/big-files',
					detail:
						'CLI tool that scans for big files to delete but stops you from removing important stuff'
				}
			]
		},
		{
			year: 2025,
			projects: [
				{
					name: 'Audio Brightness Thing',
					href: 'https://github.com/adityakakarla/audio-brightness',
					detail: 'Auto-adjust the brightness of your screen based on microphone levels'
				},
				{
					name: 'Audio Visualizer',
					href: 'https://github.com/adityakakarla/audio-visualizer',
					detail: 'Near-instantaneous terminal audio visualizer'
				},
				{
					name: 'Video-to-ASCII',
					href: 'https://github.com/adityakakarla/video-to-ascii',
					detail: 'Play videos as ASCII art in your terminal'
				},
				{
					name: 'Map Use',
					href: 'https://github.com/adityakakarla/mapping-agent',
					detail:
						'Give agents the ability to navigate maps and extract geospatial insights (like a military analyst)'
				},
				{
					name: 'Hackathons FYI',
					href: 'https://github.com/adityakakarla/hackathons-fyi',
					detail:
						'A semantic search tool to find good hackathon project ideas based on your interests'
				},
				{
					name: 'InternPilot',
					href: 'https://github.com/adityakakarla/internpilot',
					detail:
						'Semantic search tool to help students find internships at YC startups (20k+ searches)'
				},
				{
					name: 'GraphGPT',
					href: 'https://github.com/adityakakarla/neo4j-llm',
					detail: 'A desktop app to interact/traverse Neo4j Graphs using Gemini'
				},
				{
					name: 'auto-commit',
					href: 'https://github.com/adityakakarla/auto-commit',
					detail: 'Automatically create commits in your GitHub profile to improve your commit graph'
				},
				{
					name: 'DSC Copilot',
					href: 'https://github.com/adityakakarla/dsc-copilot',
					detail: 'A v0/Lovable/Bolt-like copilot, but for data science students at UCSD'
				},
				{
					name: 'fedlevels.fyi',
					href: 'https://github.com/adityakakarla/fedlevels',
					detail: 'levels.fyi, but for government employees and contractors'
				}
			]
		},
		{
			year: 2024,
			projects: [
				{
					name: 'Krait',
					href: 'https://github.com/adityakakarla/krait',
					detail: 'A CLI tool to generate other CLI tools (before the days of Claude Code/Codex)'
				},
				{
					name: 'Memori',
					href: 'https://github.com/adityakakarla/memori',
					detail: 'A website to save audio memories from your grandparents (voice -> text -> RAG)'
				},
				{
					name: 'Headlines',
					href: 'https://github.com/adityakakarla/headlines',
					detail: 'A paid service to generate useful, non-slop headlines for newsletters'
				},
				{
					name: 'Call To Change',
					href: 'https://github.com/adityakakarla/call-to-change',
					detail: 'Python observability library to track carbon emissions from LLM calls'
				},
				{
					name: 'ucsdGPT',
					href: 'https://github.com/adityakakarla/ucsd-chatbot',
					detail: 'Course catalog chatbot to help UCSD students find cool classes (5k+ queries)'
				}
			]
		},
		{
			year: 2023,
			projects: [
				{
					name: 'Focus Tracker',
					href: 'https://github.com/adityakakarla/focus-tracker',
					detail: "A finetuned YOLOv5 model that yells at you when you're on your phone"
				},
				{
					name: 'F1 Alexa Skill',
					href: 'https://github.com/adityakakarla/formula1-alexa-skill',
					detail: 'An Alexa skill to get upcoming F1 race information'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Projects · Aditya Kakarla</title>
</svelte:head>

<div class="flex w-full flex-col">
	{#each years as group, i (group.year)}
		<section class={i === 0 ? 'w-full' : 'mt-10 w-full'}>
			<h2 class="text-lg font-normal text-zinc-400">{group.year}</h2>
			<ul class="mt-4 flex w-full flex-col gap-4">
				{#each group.projects as project (project.href)}
					<li>
						<a
							href={project.href}
							class="font-bold leading-6 underline decoration-zinc-100/40 underline-offset-4 hover:decoration-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-100"
							>{project.name}</a
						>
						<p class="mt-0.5 leading-6">{project.detail}</p>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>
