<script lang='ts'>
    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience'}
    ];
</script>

<div class="flex justify-center items-center">
    <div class="flex space-x-10 border-2 border-black rounded-lg py-2 px-4 mb-8 w-fit">
        {#each paths as {name, path}}
        <a href={path} class="hover:text-sky-800 font-semibold">{name}</a>
        {/each}
    </div>
</div>
