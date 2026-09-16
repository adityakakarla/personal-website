<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' }
	];
</script>

<svelte:head>
	<title>Aditya Kakarla</title>
</svelte:head>

<div
	class="flex min-h-screen w-full flex-col items-center bg-stone-900 px-10 pt-16 pb-16 font-sans text-stone-300"
>
	<div class="flex w-[90vw] max-w-[800px] flex-col text-left">
		<nav class="mb-10 flex flex-row gap-4 font-mono text-xs tracking-[0.22em] uppercase">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class={page.url.pathname === link.href
						? 'text-cream'
						: 'text-cream-muted hover:text-cream'}
				>
					{link.label}
				</a>
			{/each}
		</nav>
		{@render children()}
	</div>
</div>
