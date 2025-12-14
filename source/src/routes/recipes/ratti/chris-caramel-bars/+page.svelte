<script lang="ts">
	import type { Contributor, CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import Fraction from "fraction.js";

	const contributors: Contributor[] = [{ kind: "person", name: "Chris" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 15,
		cookTimeMinutes: 30,
		ingredients: [
			{
				kind: "exact",
				quantity: 11,
				unit: "ounce",
				name: "package Soft Caramels",
				notes: "Unwrap them.",
			},
			{ kind: "exact", quantity: new Fraction(2, 3), unit: "cup", name: "Heavy cream" },
			{ kind: "exact", quantity: 12, unit: "ounce", name: "Semi-sweet chocolate chips" },
			{ kind: "exact", quantity: 2, unit: "cup", name: "Flour" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "salt" },
			{ kind: "exact", quantity: 1.5, unit: "cup", name: "Brown sugar" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "baking soda" },
			{ kind: "exact", quantity: 2, unit: "cup", name: "old fashioned oats" },
			{ kind: "exact", quantity: 1.5, unit: "cup", name: "melted butter" },
		],
		steps: [
			{ description: "Pre-heat oven to 350F." },
			{ description: "Melt caramels and cream in pot over low heat." },
			{ description: "Combine flour, salt, brown sugar, baking soda, oatmeal, and butter." },
			{ description: `Spread ${new Fraction(1, 2).toFraction(true)} mixture into 9x13 pan.` },
			{ description: "Bake mixture for 10 minutes." },
			{ description: "Spread chocolate chips & melted caramel mixture on top." },
			{
				description: `Crumble remaining ${new Fraction(1, 2).toFraction(true)} dry mixture on top.`,
			},
			{ description: "Bake 20 minutes." },
			{ description: "Cool & cut into squares." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Chris' Caramel Bars")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Chris' Caramel Bars</h2>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>
