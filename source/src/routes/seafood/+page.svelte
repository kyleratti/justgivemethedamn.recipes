<script lang="ts">
	import { createTitle } from "$lib/titleUtil";
</script>

<svelte:head>
	<title>{createTitle("Seafood Recipes")}</title>
</svelte:head>

<h2 class="mb-2 text-4xl font-bold">Seafood Recipes</h2>

<ul class="list-inside list-disc">
	<li class="my-2 md:my-1">
		<a href="/seafood/thai-coconut-curry-salmon" class="text-blue-500 hover:underline"
			>Thai Coconut Curry Salmon</a
		>
	</li>
</ul>
