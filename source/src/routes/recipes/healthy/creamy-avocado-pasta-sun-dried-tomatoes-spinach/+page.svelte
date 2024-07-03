<script lang="ts">
	import type { CookingRecipe } from "$lib/types";
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import Fraction from "fraction.js";

	const recipe: CookingRecipe = {
		prepTimeMinutes: 15,
		cookTimeMinutes: 20,
		ingredients: [
			{ kind: "exact", quantity: 1, unit: "pound", name: "pasta", notes: "Your favorite shape!" },
			{ kind: "approximate", description: "2 ripe avocados, pitted and halved" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "cup", name: "chopped sun-dried tomatoes" },
			{ kind: "exact", quantity: 1, unit: "cup", name: "fresh baby spinach" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "fresh basil leaves" },
			{ kind: "approximate", description: "cloves garlic, minced" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "lemon juice" },
			{ kind: "exact", quantity: new Fraction(1, 4), unit: "cup", name: "olive oil" },
			{ kind: "exact", quantity: new Fraction(1, 2), unit: "cup", name: "vegetable broth (or water)" },
			{ kind: "approximate", description: "Salt and pepper" },
		],
		steps: [
			{ description: "Cook the pasta according to the package instructions. Continue with remaining steps while pasta cooks."},
			{ description: "In a blender or food processor, combine avocados, sun-dried tomatoes, spinach, basil, garlic, lemon juice, olive oil, and vegetable broth." },
			{ description: "Blend until smooth and creamy, adding more broth or water if needed to achieve desired consistency." },
			{ description: "Season with salt and pepper to taste." },
			{ description: "Drain the pasta and return it to the pot." },
			{ description: "Pour the avocado sauce over the hot pasta and toss to coat evenly." },
			{ description: "Serve immediately and with additional fresh basil leaves for garnish (optional)." },
			{ description: "Tip: For a richer flavor, add sprinkle of nutritional yeast or grated Parmesan cheese on top before serving." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Creamy Avocado Pasta with Sun-Dried Tomatoes and Spinach")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Creamy Avocado Pasta with Sun-Dried Tomatoes and Spinach</h2>

<p>Feel free to add other vegetables to this recipe, such as chopped broccoli florets or sliced mushrooms.</p>

<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />

<IngredientsList ingredients={recipe.ingredients} />

<StepsList steps={recipe.steps} />
