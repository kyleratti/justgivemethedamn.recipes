<script lang="ts">
	import type { Ingredient } from "$lib/types";
	import CheckableIngredient from "$components/CheckableIngredient.svelte";

	export let ingredients: Ingredient[] = [];
</script>

<div class="mt-4">
	<h3 class="mb-2 text-2xl font-bold">Ingredients</h3>

	{#each ingredients as ingredient}
		<CheckableIngredient {ingredient} />
	{/each}
</div>
