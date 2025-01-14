<script lang='ts'>
    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience'}
    ];
</script>

<div class="flex justify-center items-center">
    <div class="flex space-x-10 rounded-lg py-2 px-6 mb-8 w-fit bg-white border-2 border-black z-10">
        {#each paths as {name, path}}
        <a href={path} class="hover:text-sky-700 font-semibold transition duration-100 ease-in-out">{name}</a>
        {/each}
    </div>
</div>
