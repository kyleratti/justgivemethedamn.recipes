<script lang="ts">
	import type { Contributor, CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import RecipeNote from "$components/RecipeNote.svelte";

	const contributors: Contributor[] = [
		{
			kind: "person",
			name: "Kyle",
		},
		{
			kind: "website",
			url: "https://amandascookin.com/crockpot-macaroni-and-cheese/",
		},
	];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 30,
		cookTimeMinutes: 60 * 3,
		ingredients: [
			{
				kind: "exact",
				quantity: 1,
				unit: "pound",
				name: "Pasta",
				notes: "Use quality, name-brand pasta. Cheap pasta may cook too quickly.",
			},
			{ kind: "exact", quantity: 2.5, unit: "cup", name: "Milk", notes: "Ideally whole." },
			{ kind: "exact", quantity: 12, unit: "ounce", name: "Evaporated milk" },
			{
				kind: "exact",
				quantity: 12,
				unit: "ounce",
				name: "Sharp cheddar cheese",
				notes: "Shredded.",
			},
			{
				kind: "exact",
				quantity: 4,
				unit: "ounce",
				name: "American or Monterry cheese",
				notes: "Shredded.",
			},
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "Salt" },
			{ kind: "exact", quantity: 0.5, unit: "teaspoon", name: "Black pepper" },
			{ kind: "exact", quantity: 0.25, unit: "teaspoon", name: "Garlic powder" },
			{ kind: "approximate", description: "Cayenne pepper to taste" },
			{ kind: "exact", quantity: 4, unit: "tablespoon", name: "Butter" },
		],
		steps: [
			{ description: "Spray slow cooker with non-stick spray." },
			{
				description: "In crockpot, combine everything.",
				notes: "If doubling recipe, add pasta and cheese in chunks so it's easier to mix.",
			},
			{ description: "Cook on low heat for 1 hour." },
			{ description: "Remove lid and stir." },
			{
				description: "Cook on low heat for additional 1-2 hours until warm and tender.",
				notes:
					"Actual cook time will depend heavily on what type of pasta is used. Large pasta shapes will take longer to cook.",
			},
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Kyle's Mac and Cheese")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Kyle's Mac and Cheese</h2>

<RecipeNote>
	This is a very "heavy" meal and is very filling. I recommend serving this as a side dish.
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
