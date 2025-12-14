<script lang="ts">
	import type { Ingredient } from "$lib/types";
	import CheckableIngredient from "$components/CheckableIngredient.svelte";

	export let ingredients: Ingredient[] = [];
</script>

<div>
	<h3 class="mb-4 text-3xl font-bold">Ingredients</h3>

	{#each ingredients as ingredient}
		<div class="not-first-of-type:my-4">
			<CheckableIngredient {ingredient} />
		</div>
	{/each}
</div>
