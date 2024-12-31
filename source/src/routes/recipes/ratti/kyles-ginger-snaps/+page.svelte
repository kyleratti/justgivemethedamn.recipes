<script lang="ts">
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import type { Contributor, CookingRecipe, RecipeStep } from "$lib/types";
	import Fraction from "fraction.js";

	const contributors: Contributor[] = [{ kind: "person", name: "Kyle" }];

	const recipe: CookingRecipe = {
		prepTimeMinutes: 80,
		cookTimeMinutes: 10,
		ingredients: [
			{ kind: "exact", quantity: 1, unit: "cup", name: "sugar" },
			{ kind: "exact", quantity: new Fraction(3, 4), unit: "cup", name: "salted butter" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "molasses" },
			{ kind: "exact", quantity: 1, unit: "item", name: "large egg" },
			{ kind: "exact", quantity: new Fraction(9, 4), unit: "cup", name: "all-purpose flour" },
			{ kind: "exact", quantity: 2, unit: "teaspoon", name: "baking soda" },
			{ kind: "exact", quantity: 1, unit: "teaspoon", name: "ground cinnamon" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "ground ginger" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "ground cloves" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "teaspoon", name: "ground nutmeg" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "teaspoon", name: "salt" },
			{ kind: "approximate", description: "sugar for rolling (recommended cane sugar)" },
		],
		steps: [
			{ description: "In a large bowl, add the sugar, butter, molasses, and egg." },
			{ description: "Beat on medium until light and fluffy." },
			{ description: "Add in the flour, baking soda, cinnamon, ginger, cloves, nutmeg, and salt." },
			{ description: "Stir well until fully combined." },
			{ description: "Cover with plastic wrap and chill in the refrigerator for at least an hour." },
			{ description: "Preheat oven to 350 degrees." },
			{ description: "Line baking sheets with parchment paper or silicone baking mats." },
			{ description: "Pour some cane sugar into a small bowl for rolling." },
			{ description: "Use a medium cookie scoop to shape the dough into approximately 1\" balls. Roll in sugar and place onto baking sheet." },
			{ description: "Bake for 9-10 minutes or until just set (they will puff up then flatten while baking)." },
			{ description: "Remove from oven and let stand on cookie sheet for 1 minute before transferring to a cooling rack." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Kyle's Ginger Snaps")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Kyle's Ginger Snaps</h2>

<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />

<IngredientsList ingredients={recipe.ingredients} />

<StepsList steps={recipe.steps} />
