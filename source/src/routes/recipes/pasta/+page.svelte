<script lang="ts">
	import { createTitle } from "$lib/titleUtil";

	//
</script>

<svelte:head>
	<title>{createTitle("Pasta Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Pasta Recipes</h2>

<ul class="list-inside list-disc">
	<li class="md:my-1 my-2">
		<a href="/recipes/pasta/creamy-avocado-pasta-sun-dried-tomatoes-spinach" class="text-blue-500 hover:underline"
			>Creamy Avocado Pasta with Sun-Dried Tomatoes and Spinach</a
		>
	</li>
</ul>
