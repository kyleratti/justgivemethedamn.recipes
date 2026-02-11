<script lang="ts">
	import type { Contributor, CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";

	const contributors: Contributor[] = [{ kind: "person", name: "Lauren" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 15,
		cookTimeMinutes: 5,
		ingredients: [
			{ kind: "approximate", description: "10 plum tomatoes" },
			{
				kind: "exact",
				quantity: 1,
				unit: "item",
				name: "green bell pepper",
				notes: "Seeds removed.",
			},
			{ kind: "exact", quantity: 1, unit: "item", name: "medium white onion" },
			{
				kind: "approximate",
				description: "1 or 2 jalapeno peppers",
				notes: "Remove seeds for less spice.",
			},
			{ kind: "exact", quantity: 1, unit: "bunch", name: "Cilantro, chopped" },
			{ kind: "exact", quantity: 1, unit: "tablespoon", name: "Cumin", notes: "To taste." },
			{ kind: "exact", quantity: 1.5, unit: "teaspoon", name: "Kosher salt", notes: "To taste." },
			{ kind: "exact", quantity: 1, unit: "tablespoon", name: "Lime juice" },
		],
		steps: [
			{ description: "Dice tomatoes, peppers, onion." },
			{ description: "Combine in large bowl." },
			{ description: "Add cilantro and mix." },
			{ description: "Stir in cumin, kosher salt, and lime juice to your taste." },
			{ description: "Serve with chips." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Chris' Salsa")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Chris' Salsa</h2>

<p>Can be made 1 day in advance and refrigerated.</p>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>
