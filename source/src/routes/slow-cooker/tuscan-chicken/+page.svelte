<script lang="ts">
	import type { CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";

	const recipe: CookingRecipe = {
		prepTimeMinutes: 15,
		cookTimeMinutes: 60 * 3 + 10,
		ingredients: [
			{ kind: "approximate", description: "Chicken breasts" },
			{ kind: "approximate", description: "Italian seasoning" },
			{ kind: "approximate", description: "Onion powder" },
			{ kind: "approximate", description: "Salt and pepper" },
			{ kind: "approximate", description: "Garlic cloves" },
			{ kind: "approximate", description: "Sun dried tomatoes" },
			{ kind: "approximate", description: "Chicken broth" },
			{ kind: "approximate", description: "Heavy cream" },
			{ kind: "approximate", description: "Parmesan cheese" },
			{ kind: "approximate", description: "Spinach" },
		],
		steps: [
			{
				description:
					"Season chicken breasts with Italian seasoning, onion powder, salt, and pepper.",
			},
			{ description: "Spray slow cooker with non-stick spray." },
			{ description: "Add chicken to slow cooker." },
			{
				description:
					"Make sauce by combining chicken broth, heavy cream, minced garlic, chopped sun dried tomatoes, and parmesan cheese. Whisk until mixed.",
			},
			{ description: "Pour sauce over chicken." },
			{ description: "Cook on HIGH for 3 hours or LOW for 5 hours." },
			{ description: "Add spinach to the crock pot right before serving." },
			{ description: "Serve with pasta." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Tuscan Chicken")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Tuscan Chicken</h2>

<p>This is really good. It's terrible for you, but it's good.</p>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>
