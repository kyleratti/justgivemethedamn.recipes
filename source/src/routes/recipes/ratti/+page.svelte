<script lang="ts">
	import { createTitle } from "$lib/titleUtil";
</script>

<svelte:head>
	<title>{createTitle("Ratti Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Ratti Recipes</h2>

<p>These recipes are from the Ratti family.</p>

<ul class="list-inside list-disc">
	<li>
		<a href="/recipes/ratti/chris-caramel-bars" class="text-blue-500 hover:underline"
			>Chris' Caramel Bars</a
		>
	</li>
	<li>
		<a href="/recipes/ratti/chris-salsa" class="text-blue-500 hover:underline">Chris' Salsa</a>
	</li>
	<li>
		<a href="/recipes/ratti/grandma-wests-baked-beans" class="text-blue-500 hover:underline"
			>Grandma West's Baked Beans</a
		>
	</li>
	<li>
		<a href="/recipes/ratti/laurens-chicken-pot-pie" class="text-blue-500 hover:underline"
			>Lauren's Chicken Pot Pie</a
		>
	</li>
</ul>
