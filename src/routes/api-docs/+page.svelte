<script lang="ts">
	import ApiExample from "$lib/components/ApiExample.svelte";

    const codeExamples = [
        {title: 'Name',
            description: 'Get my first name. Unnecessary, but why not.',
            endpoint: 'name'
        },
        {title: 'Age',
            description: 'Get my approximate age. Not exact to maintain my privacy.',
            endpoint: 'age'
        },
        {title: 'University',
            description: 'Get the name of the university I attend.',
            endpoint: 'university'
        },
        {title: 'Major',
            description: 'Get the major I study at university. Again, probably unnecessary.',
            endpoint: 'major'
        }
    ]
</script>

<div class=' p-4 rounded-lg border-2 border-black bg-white'>
    <div class="space-y-4 text-center pb-8 border-black">
    <p>Wow, someone actually wants to use the API.</p>
    <p>Impressive.</p>
    <p>You are probably a recruiter. Or an LLM scraper.</p>
    <p>
        Either way, here you go:
    </p>
</div>
    <div>
        {#each codeExamples as codeExample}
        <ApiExample {...codeExample}/>
        {/each}
    </div>
</div>