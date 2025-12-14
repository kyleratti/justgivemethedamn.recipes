<script lang="ts">
	import { createTitle } from "$lib/titleUtil";

	//
</script>

<svelte:head>
	<title>{createTitle("Slow Cooker Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Slow Cooker Recipes</h2>

<ul class="list-inside list-disc">
	<li class="md:my-1 my-2">
		<a href="/recipes/slow-cooker/kyles-mac-and-cheese" class="text-blue-500 hover:underline"
			>Kyle's Mac and Cheese</a
		>
	</li>
	<li class="md:my-1 my-2">
		<a href="/recipes/slow-cooker/tuscan-chicken" class="text-blue-500 hover:underline"
			>Tuscan Chicken</a
		>
	</li>
</ul>
