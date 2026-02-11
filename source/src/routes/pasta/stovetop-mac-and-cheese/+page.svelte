<script lang="ts">
	import type { CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import Fraction from "fraction.js";
	import RecipeNote from "$components/RecipeNote.svelte";

	const recipe: CookingRecipe = {
		prepTimeMinutes: 5,
		cookTimeMinutes: 15,
		ingredients: [
			{ kind: "exact", quantity: 1, unit: "pound", name: "pasta", notes: "Penne or elbow" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "butter" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "flour" },
			{ kind: "exact", quantity: 2, unit: "cup", name: "milk" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "dry mustard" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "teaspoon", name: "salt" },
			{
				kind: "exact",
				quantity: new Fraction(1, 4),
				unit: "teaspoon",
				name: "white ground pepper",
				notes: "or black ground pepper",
			},
			{ kind: "exact", quantity: new Fraction(1, 8), unit: "teaspoon", name: "garlic powder" },
			{ kind: "exact", quantity: 8, unit: "ounce", name: "shredded cheese", notes: "about 2 cups" },
		],
		steps: [
			{ description: "Boil pasta according to package directions." },
			{ description: "While pasta is boiling, melt butter in another sauce pan." },
			{ description: "Stir in flour and cook over low heat for 1-2 minutes. " },
			{ description: "Whisk in milk." },
			{ description: "Add dry mustard, garlic powder, salt, and pepper." },
			{
				description:
					"Heat over medium heat, stirring occasionally to avoid scorching. The mixture will begin to thicken as it heats up.",
				notes: "Do NOT bring to a boil.",
			},
			{
				description:
					"Once your mixture has thickened, remove from heat and slowly add cheese while stirring.",
			},
			{ description: "Drain pasta and return to pan." },
			{ description: "Pour cheese mixture over top, stir, and serve." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Stovetop Mac and Cheese")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Stovetop Mac and Cheese</h2>

<RecipeNote>Don't be afraid to garnish with scallions or mix in some shrimp.</RecipeNote>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50 p-4 md:p-8">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="mb-4 rounded-md border border-slate-200 bg-slate-50 p-4 md:p-8">
	<StepsList steps={recipe.steps} />
</div>
