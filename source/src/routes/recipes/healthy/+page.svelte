<script lang="ts">
	import { createTitle } from "$lib/titleUtil";

	//
</script>

<svelte:head>
	<title>{createTitle("Healthy Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Healthy Recipes</h2>

<ul class="list-inside list-disc">
	<li>
		<a href="/recipes/healthy/creamy-avocado-pasta-sun-dried-tomatoes-spinach" class="text-blue-500 hover:underline"
			>Creamy Avocado Pasta with Sun-Dried Tomatoes and Spinach</a
		>
	</li>
</ul>
