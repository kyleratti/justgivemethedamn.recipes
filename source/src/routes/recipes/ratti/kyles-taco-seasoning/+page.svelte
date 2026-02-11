<script lang="ts">
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import type { Contributor, CookingRecipe } from "$lib/types";
	import Fraction from "fraction.js";
	import RecipeNote from "$components/RecipeNote.svelte";

	const contributors: Contributor[] = [{ kind: "person", name: "Kyle" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 5,
		cookTimeMinutes: 0,
		ingredients: [
			{ kind: "exact", quantity: 1, unit: "tablespoon", name: "chili powder" },
			{ kind: "exact", quantity: new Fraction(3, 2), unit: "teaspoon", name: "ground cumin" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "sea salt" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "ground black pepper" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "ground paprika" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "teaspoon", name: "garlic powder" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "teaspoon", name: "onion powder" },
			{
				kind: "exact",
				quantity: new Fraction(1, 4),
				unit: "teaspoon",
				name: "crushed red pepper flakes",
			},
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "teaspoon", name: "dried oregano" },
		],
		steps: [{ description: "Mix all ingredients together." }],
	};
</script>

<svelte:head>
	<title>{createTitle("Kyle's Taco Seasoning")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Kyle's Taco Seasoning</h2>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50 p-4 md:p-8">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50 p-4 md:p-8">
	<StepsList steps={recipe.steps} />
</div>
