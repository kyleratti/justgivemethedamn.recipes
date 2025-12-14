<script lang="ts">
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import type { Contributor, CookingRecipe, RecipeStep } from "$lib/types";
	import Fraction from "fraction.js";

	const contributors: Contributor[] = [{ kind: "person", name: "Lauren" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 40,
		cookTimeMinutes: 60,
		ingredients: [
			{
				kind: "exact",
				quantity: 2,
				unit: "item",
				name: "Pillsbury/Giant brand pre-made pie crusts-top & bottom",
			},
			{ kind: "exact", quantity: 8, unit: "tablespoon", name: "butter" },
			{ kind: "exact", quantity: new Fraction(1, 3), unit: "cup", name: "diced yellow onions" },
			{ kind: "exact", quantity: 2, unit: "item", name: "medium carrots, sliced (about 1 cup)" },
			{
				kind: "exact",
				quantity: 1,
				unit: "item",
				name: `stalk celery, sliced (about ${new Fraction(1, 2).toFraction(true)} cup)`,
			},
			{
				kind: "exact",
				quantity: 2,
				unit: "item",
				name: "cloves garlic, minced",
				notes: "Or use pre-minced garlic.",
			},
			{ kind: "exact", quantity: new Fraction(1, 3), unit: "cup", name: "all-purpose flour" },
			{ kind: "exact", quantity: 6, unit: "teaspoon", name: "fresh minced thyme" },
			{ kind: "exact", quantity: 2, unit: "tablespoon", name: "fresh minced Italian parsley" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "salt" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "pepper" },
			{ kind: "exact", quantity: 2, unit: "cup", name: "chicken broth" },
			{ kind: "exact", quantity: 1, unit: "cup", name: "heavy cream" },
			{ kind: "exact", quantity: new Fraction(1, 3), unit: "cup", name: "frozen peas" },
			{
				kind: "exact",
				quantity: 6,
				unit: "cup",
				name: "shredded chicken",
				notes: "I use 2 Costco Rotisserie Chickens.",
			},
			{
				kind: "exact",
				quantity: 1,
				unit: "item",
				name: "large egg, beaten, for egg was on top crust",
			},
		],
		steps: [
			{ description: "Pre-heat oven to 400F." },
			{ description: "Remove pie crust from refrigerator." },
			{ description: "Roll pie crust on a lightly flourered surface-about 12-inch circle." },
			{ description: 'Transfer crust to 9" pie pan.' },
			{ description: "Pat smooth with your fingers." },
			{ description: "Trim overhang." },
			{ description: "Set aside & make the filling." },
		],
	};

	const fillingSteps: RecipeStep[] = [
		{ description: "Heat butter over medium-high heat in large skillet." },
		{
			description:
				"Add onions, carrots, celery, garlic and cook until tender, stirring occasionally, about 15 minutes.",
		},
		{ description: "Whisk in flour, pepper, thyme, parsley, chicken broth, and heavy cream." },
		{ description: "Whish until there are no flour lumps." },
		{ description: "Simmer over medium-low heat for 10 minutes or until sauce has thickened." },
		{ description: "Stir in shredded chicken and frozen peas." },
		{ description: "Remove from heat and let cool slightly." },
		{ description: "Add filling to pie pan." },
		{ description: "Roll out top crust on a lightly floured surface-about 12-14-inch circle." },
		{ description: "Trim overhang & seal edges by crimping/pinching with a fork or your fingers." },
		{
			description:
				"Using a sharp knife, vent the crust by slicing a few small slits in the center of the top crust.",
		},
		{ description: "Beat the egg and brush over the top crust." },
		{ description: "Bake for 25 minutes and check if crust is browning too much." },
		{
			description:
				"Add foil to cover top crust and bake for another 20-35 minutes until crust is golden brown.",
		},
		{ description: "Remove from oven and let sit for 5-10 minutes to cool." },
		{ description: "Slice and serve." },
	];
</script>

<svelte:head>
	<title>{createTitle("Lauren's Chicken Pot Pie")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Lauren's Chicken Pot Pie</h2>

<p>This pot pie can be frozen for up to 1 month.</p>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={fillingSteps}>
		<h3 slot="title" class="mb-4 text-3xl font-bold">Filling Instructions</h3>
	</StepsList>
</div>
