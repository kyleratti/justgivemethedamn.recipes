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
		prepTimeMinutes: 2,
		cookTimeMinutes: 30,
		ingredients: [
			{ kind: "exact", quantity: 4, unit: "cup", name: "cold water", notes: "Cold water is important!" },
			{
				kind: "exact",
				quantity: new Fraction(18, 4),
				unit: "tablespoon",
				name: "Morton's table salt",
				notes: "The type of salt matters a lot. If not using Morton's table salt, use 6 tablespoons of Diamond Crystal kosher salt or 3 tablespoons of fine/table salt."
			},
			{ kind: "approximate", description: "Chicken breasts or thighs" },
		],
		steps: [
			{ description: "Tenderize the chicken thoroughly." },
			{ description: "In a large bowl, combine the cold water and salt." },
			{ description: "Mix the water and salt until the salt is completely dissolved." },
			{ description: "Add the tenderized chicken to the bowl." },
			{ description: "Let sit in bowl for 25-35 minutes. There isn't much difference in flavor beyond the 35 minute mark." },
			{ description: "Remove chicken and cook as desired." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Kyle's Chicken Brine")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Kyle's Chicken Brine</h2>

<RecipeNote>
	Brining chicken will help add flavor to chicken.
	I do this first and then spend the 30 minutes prepping the rest of the meal.
</RecipeNote>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>
