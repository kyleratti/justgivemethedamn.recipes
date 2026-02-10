<script lang="ts">
	import { createTitle } from "$lib/titleUtil";

	const links: Array<{ href: string; label: string }> = [
		{
			href: "/recipes/pasta/creamy-avocado-pasta-sun-dried-tomatoes-spinach",
			label: "Creamy Avocado Pasta with Sun-Drived Tomatoes and Spinach",
		},
		{
			href: "/recipes/pasta/stovetop-mac-and-cheese",
			label: "Stovetop Mac and Cheese",
		},
	];
</script>

<svelte:head>
	<title>{createTitle("Pasta Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Pasta Recipes</h2>

<ul class="list-inside list-disc">
	{#each links as { href, label }}
		<li class="my-2 md:my-1">
			<a {href} class="text-blue-500 hover:underline">
				{label}
			</a>
		</li>
	{/each}
</ul>
