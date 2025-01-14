<script>
	import Project from '$lib/components/Project.svelte';

	const projects = [
		{
			name: "api.adityakakarla.com",
			tags: ['Go','Docker','GCP','Svelte'],
			link: '/api-docs',
			description: [
				'Utilized Go to engineer a limited personal information API at the above URL',
				'Containerized app using Docker and deployed using Google Cloud Run with custom domain',
				'Utilized Svelte to build documentation page to explain API endpoints to an empty audience',
				'Wrote multiple unit tests to verify accuracy of information fetched from API endpoint',
			]
		},
		{
			name: 'Krait',
			tags: ['Go','OpenAI'],
			link: 'https://github.com/adityakakarla/krait',
			description: [
				'Built a CLI tool using Go to help developers build CLI tools with OpenAI and Anthropic',
				'Utilized Cobra to create CLI tool with subcommands and flags for optimal user experience',
				'Created local storage solution for user API keys and configuration options',
				'Published Krait to Github where anyone with Go installed can download and use it'
			]
		},
		{
			name: 'Sopabase',
			tags: ['Next.js', 'Supabase', 'Tailwind', 'Python', 'Flask', 'Anthropic', 'Adalflow'],
			link: 'https://github.com/HitarthSS/SOPABase',
			description: [
				'Developed defense copilot to guide decision making based on standard operating procedures',
				'Built frontend with satellite imagery and chat interface using Next.js, shadcn, and Tailwind',
				'Engineered Flask backend to handle image and chat requests using Supabase and Anthropic',
				'Prototyped RAG agent using Adalflow and Supabase to make decisions based on military doctrine',
				'Competed at Y Combinator hackathon, ultimately featured by Adalflow as a prime use case'
			]
		},
		{
			name: 'CallToChange',
			tags: ['Next.js', 'Tailwind', 'Python', 'MongoDB', 'Clerk'],
			link: 'https://github.com/adityakakarla/call-to-change/',
			description: [
				'Developed an application to offset carbon emissions from LLM calls used in AI apps',
				'Created a custom Python library (call-to-change) to track LLM calls through function wrappers',
				'Utilized MongoDB to track text generation and image generation calls in a cloud database',
				'Built a secure emissions dashboard interface using NextJS, Tailwind, and Clerk'
			]
		},
		{
			name: 'ucsdGPT',
			tags: ['Next.js', 'JavaScript', 'LangChain', 'Supabase', 'OpenAI', 'Tailwind'],
			link: 'https://github.com/adityakakarla/ucsd-chatbot',
			description: [
				'Created a chatbot to help students based on 3,898 UCSD undergraduate course descriptions',
				'Used Supabase to store and retrieve vector embeddings of course descriptions',
				'Utilized Langchain.js to chain prompts, fetch Supabase data, and interact with the OpenAI API',
				'Created an interactive interface using Next.js, shadcn, and Tailwind'
			]
		},
		{
			name: 'Focus Tracker',
			tags: ['Python', 'OpenCV', 'PyTorch', 'Roboflow'],
			link: 'https://github.com/ajagtapdev/EyePopAiHackathon',
			description: [
				'Developed a focus tracker that punishes users through audio when a phone is detected',
				'Wrote Python script to automatically capture photos and save them locally using OpenCV',
				'Collected, processed, and labelled object detection boxes for 827 images using Roboflow',
				'Incorporated YOLOv5 to train the model and detect phones in webcam feed',
				'Achieved mAP of 98.4%, precision of 96.9%, and recall of 96.4%'
			]
		},
		{
			name: 'Pic-To-Plate',
			tags: ['Javascript', 'HTML', 'CSS', 'OpenAI'],
			link: 'https://github.com/ajagtapdev/EyePopAiHackathon',
			description: [
				'Developed a computer vision app that analyzes food images and provides caloric information',
				'Utilized the OpenAI API to generate recipes based on detected ingredients in image',
				'Engineered computer vision pipeline to fetch a list of detected fruits and vegetables',
				'Won 1st place in a computer vision hackathon with team of 3'
			]
		},
		{
			name: 'F1 Alexa',
			tags: ['Python', 'Alexa'],
			link: 'https://github.com/adityakakarla/formula1-alexa-skill',
			description: [
				'Developed an Alexa skill that tells users the time remaining until the next F1 Grand Prix',
				'Created relevant intents, sample utterances, and slots through Alexa Developer Console',
				'Used Python to parse F1 schedule data fetched from the Ergast F1 API'
			]
		},
		{
			name: 'Anti-Podal Calculator',
			tags: ['Python', 'Streamlit'],
			link: 'https://github.com/adityakakarla/antipodal-calculator',
			description: [
				'Developed a web app that finds anti-podal location (location on opposite side of the planet)',
				'Used Streamlit to create map that displays both user location and anti-podal location',
				'Used reverse geocode library and GeoPy to indentify nearest countries when in water',
				'Utilized Streamlit Share and Github to deploy web app'
			]
		}
	];
</script>

<div class="space-y-8">
	{#each projects as project}
		<Project {...project} />
	{/each}
</div>
