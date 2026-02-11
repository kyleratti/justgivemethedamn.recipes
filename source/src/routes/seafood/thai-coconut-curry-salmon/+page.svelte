<script lang="ts">
	import type { Contributor, CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import photo from "./photo.jpeg";
	import RecipeHeading from "$components/RecipeHeading.svelte";

	const contributors: Contributor[] = [{ kind: "person", name: "Jennifer" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 10,
		cookTimeMinutes: 20,
		ingredients: [
			{ kind: "approximate", description: "Salmon filets" },
			{ kind: "approximate", description: "Magic season blend (seafood magic) and salt" },
			{ kind: "exact", quantity: 3, unit: "item", name: "garlic clove", notes: "minced" },
			{ kind: "exact", quantity: 2, unit: "tablespoon", name: "fresh ginger", notes: "minced" },
			{ kind: "exact", quantity: 1, unit: "tablespoon", name: "Thai red curry paste" },
			{ kind: "exact", quantity: 1, unit: "can", name: "coconut paste" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "fish sauce" },
			{ kind: "exact", quantity: 1, unit: "item", name: "lime", notes: "juice only" },
			{ kind: "approximate", description: "Fresh red, yellow, and orange peppers", notes: "washed and sliced" },
			{ kind: "approximate", description: "Fresh jalapeño", notes: "sliced (optional) or pepper flakes" },
			{ kind: "approximate", description: "Fresh cilantro", notes: "chopped" },
		],
		steps: [
			{ description: "Heat sauce pan on medium-low heat. Add butter and drizzle some olive oil to avoid butter from burning." },
			{ description: "Add the seasoned salmon and cook each side.", notes: "Do not fully cook salmon." },
			{ description: "Remove salmon from pan." },
			{ description: "On the pan you cooked the salmon on, add minced garlic and ginger." },
			{ description: "Cook until softened and aromatic, about 1-2 minutes." },
			{ description: "Stir Thai red curry paste, fish sauce, pour in coconut milk, onion powder, and the juice of a lime." },
			{ description: "The mixture will become very thick. Whisk to combine and let bubble briefly for a second or two." },
			{ description: "Reduce heat to a gentle simmer and cook for about 2 minutes, allowing it to thicken slightly." },
			{
				description: "Add red, yellow, and orange peppers (jalapeño optional).",
				notes: "If you don't like jalapeño, add red pepper flakes instead for a little kick of heat.",
			},
			{ description: "Transfer the salmon filets to the skillet and continue cooking for another 5 minutes or until the salmon is fully cooked through." },
			{ description: "Garnish with cilantro." },
			{ description: "Spoon the salmon and sauce over fluffy basmati or jasmine rice, adding extra sauce on top." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Thai Coconut Curry Salmon")}</title>
</svelte:head>

<RecipeHeading>
	Thai Coconut Curry Salmon
</RecipeHeading>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4 flex items-center">
	<img src={photo} alt="" class="max-w-48 rounded-l-md inline-block" />
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} inline />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<StepsList steps={recipe.steps} />
</div>
