<script>
  import List from "$lib/components/List.svelte";

  const currentActivitySectionTitle = "Present 📸"
  const currentActivityItems = [
    "studying Data Science at UC San Diego (will graduate in June 2026)",
    "building AI agents for back-office defense tasks as a Palantir Fellow",
    "deploying AI agents to automate bioinformatics analysis at the Mesirov Lab",
    "learning Svelte and Go for fun",
    "writing a newsletter about iPads"
  ]

  const pastActivitySectionTitle = "Past 🕰️"
  const pastActivityItems = [
    "interned at federal agencies",
    "worked at startups",
    "built a marketing agency",
    "became an Eagle Scout"
  ]

  const futureActivitySectionTitle = "Future ⚡️"
  const futureActivityItems = [
    "interning at Microsoft as a Software Engineer Intern"
  ]
</script>

<div class="w-full h-full flex flex-col items-center space-y-8">
  <h1 class='text-8xl font-extrabold mt-36 mb-8 text-center'>Meet Aditya.</h1>
  <List title={currentActivitySectionTitle} items={currentActivityItems} />
  <!-- <List title={pastActivitySectionTitle} items={pastActivityItems} />
  <List title={futureActivitySectionTitle} items={futureActivityItems} /> -->
</div>
  