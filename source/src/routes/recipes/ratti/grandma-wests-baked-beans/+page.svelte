<script lang="ts">
	import type { Contributor, CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";

	const contributors: Contributor[] = [{ kind: "person", name: "Lauren" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 20,
		cookTimeMinutes: 60,
		ingredients: [
			{
				kind: "exact",
				quantity: 6,
				unit: "can",
				name: "Seaside Butter beans or grande Lima beans",
			},
			{ kind: "exact", quantity: 1, unit: "pound", name: "bacon" },
			{ kind: "exact", quantity: 1, unit: "item", name: "medium yellow onion, chopped" },
			{ kind: "exact", quantity: 1, unit: "cup", name: "brown sugar" },
			{ kind: "exact", quantity: 1, unit: "cup", name: "ketchup" },
		],
		steps: [
			{
				description: "Cook bacon in frying pan until crispy.",
				notes: "Do not microwave! You will need the grease!",
			},
			{ description: "Remove bacon and set aside on paper towel lined plate." },
			{ description: "Add chopped onion to frying pan and sauté until soft." },
			{
				description:
					"Add brown sugar and ketchup to mixture. Cook, stirring constantly for 5 mins.",
			},
			{ description: "Crumble all bacon, (reserve 2 slices for garnish), and add to mixture." },
			{ description: "Drain beans and rinse in cool water. Pour them into 9x13 baking dish." },
			{ description: "Pour mixture over beans until stir until incorporated." },
			{ description: "Crumble remaining bacon on top." },
			{ description: "Bake at 350F for 45-60 minutes or until it bubbles." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Grandma West's Baked Beans")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Grandma West's Baked Beans</h2>

<p>This can be made in advance and re-heated in the microwave.</p>

<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />

<IngredientsList ingredients={recipe.ingredients} />

<StepsList steps={recipe.steps} />
