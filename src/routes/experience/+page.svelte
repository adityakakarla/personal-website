<script>
	import Experience from '$lib/components/Experience.svelte';

	const experiences = [
		{
			title: 'Software Engineer Intern',
			company: 'Mesirov Lab (UCSD School of Medicine)',
			tags: ['Python', 'R', 'Docker', 'AWS', 'Anthropic', 'Ollama', 'LangGraph'],
			description: [
				'Contributed to open-source computational biology tool with more than 90,000 registered users',
				'Prototyped AI agents to generate Python scripts, R scripts, and Dockerfiles using LangGraph',
				'Engineered pipelines to support cloud-based data processing using Python, R, and Docker',
				'Utilized OpenAI and LangChain to implement RAG chatbot for platform support'
			]
		},
		{
			title: 'Software Engineer Fellow',
			company: 'Palantir Technologies',
			tags: ['Palantir', 'Python', 'OpenAI', 'Next.js', 'Tailwind', 'shadcn'],
			description: [
				'Engineered scalable fleet logistics solution for federal agencies using Palantir Foundry',
				'Utilized Python, Foundry Pipelines, and OpenAI to migrate data from legacy datasets',
				'Deployed website to manage vehicle reservations using Next.js, Tailwind, and shadcn',
				'Employed Workshop, Countour, and AIP to create AI agents for vehicle teams'
			]
		},

		{
			title: 'Software Engineer Intern',
			company: 'United States Department of Defense',
			tags: ['Python', 'Neo4j', 'OpenAI', 'LangChain'],
			description: [
				'Deployed internal Python library to automate ETL process for vehicle reports',
				'Improved runtime of internal ArcGIS dependency scraping script by 99.7%',
				'Engineered data pipeline to populate Neo4j knowledge graph using GPT-4o',
				'Built Python library to enable integration between internal LLM API and LangChain',
				'Prototyped AI-powered simulations using AI agents built with LangGraph and Neo4j'
			]
		},
		{
			title: 'Software Engineer Intern',
			company: 'EyePop.ai',
			tags: ['Next.js', 'Tailwind', 'TypeScript', 'Vercel'],
			description: [
				'Built demos to showcase product for a startup building a computer vision API',
				'Engineered interactive live-action fitness rep counter utilizing computer vision',
				'Deployed user-friendly Next.js mobile web app to demonstrate enterprise use cases',
				'Implemented AI-powered profile photo cropper with Next.js and TailwindCSS'
			]
		},
		{
			title: 'Software Engineer Intern',
			company: 'Engineers for Exploration',
			tags: ['React', 'TypeScript', 'CSS'],
			description: [
				'Worked with UI/UX designer to transfer Figma design to frontend with vanilla CSS',
				'Developed interactive maps for machine learning researchers using Leaflet and React',
				'Implemented various buttons to adjust user interface via UseState and Use Effect',
				'Created configurable GeoJSON objects for analysis of environmental research data'
			]
		},
		{
			title: 'Data Engineer Intern',
			company: 'United States Department of Agriculture',
			tags: ['Pandas', 'NumPy', 'Matplotlib', 'Python'],
			description: [
				'Cleaned/processed 1,000,000+ datapoints for food program participation using Pandas/Numpy',
				'Created 80+ graphs to visualize program trends with Matplotlib, Pandas, and Numpy',
				'Generated templates to promote inclusive data reporting with GeoPandas and Matplotlib',
				'Developed Data Literacy curriculum for 235 students in internal Data Science Training Program'
			]
		},
		{
			title: 'Software Engineer Intern',
			company: 'incy.ai',
			tags: ['TypeScript', 'React', 'Remix', 'Supabase', 'Postmark'],
			description: [
				'Developed "Reset Password" functionality for 80+ users using TypeScript and Supabase',
				'Automated 300+ email notifications based on user information using TypeScript and Postmark',
				'Developed email templates and databse schema to ensure correct notification formatting',
				'Examined the use of OCR and LLMs to automate insurance quote generation'
			]
		}
	];
</script>

<div class="space-y-8">
	{#each experiences as experience}
		<Experience {...experience} />
	{/each}
</div>
