<script>
  import List from "$lib/components/List.svelte";

  const currentActivitySectionTitle = "I am currently:"
  const currentActivityItems = [
    "studying Data Science at UC San Diego (will graduate in June 2026)",
    "building AI agents for back-office defense tasks as a Palantir Fellow",
    "deploying AI agents to automate bioinformatics analysis at the Mesirov Lab",
    "learning Svelte and Go for fun",
    "writing a newsletter about iPads"
  ]

  const futureActivitySectionTitle = "I will be:"
  const futureActivityItems = [
    "interning at Microsoft as a Software Engineer Intern"
  ]

  const pastActivitySectionTitle = "I have previously:"
  const pastActivityItems = [
    "interned at federal agencies",
    "worked at startups",
    "built a marketing agency",
    "became an Eagle Scout"
  ]
</script>

<div class="w-full space-y-8">
  <List title={currentActivitySectionTitle} items={currentActivityItems} />
  <List title={futureActivitySectionTitle} items={futureActivityItems} />
  <List title={pastActivitySectionTitle} items={pastActivityItems} />
</div>
  