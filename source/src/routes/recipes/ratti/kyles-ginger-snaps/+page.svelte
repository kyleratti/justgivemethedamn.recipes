<script lang="ts">
	import IngredientsList from "$components/IngredientsList.svelte";
	import RecipeTime from "$components/RecipeTime.svelte";
	import StepsList from "$components/StepsList.svelte";
	import { createTitle } from "$lib/titleUtil";
	import type { Contributor, CookingRecipe, RecipeStep } from "$lib/types";
	import Fraction from "fraction.js";
	import RecipeNote from "$components/RecipeNote.svelte";

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
			{ kind: "approximate", description: "Sugar for rolling (recommended chunky cane sugar)" },
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
			{ description: "Use a spoon or medium cookie scoop to shape the dough into approximately 1\" balls. Roll in sugar and place onto baking sheet." },
			{ description: "Bake for 9-10 minutes or until just set. They will puff up then flatten while baking." },
			{ description: "Remove from oven and let stand on cookie sheet for 1 minute before transferring to a cooling rack." },
		],
	};
</script>

<svelte:head>
	<title>{createTitle("Kyle's Ginger Snaps")}</title>
</svelte:head>

<h2 class="mb-2 text-2xl font-bold">Kyle's Ginger Snaps</h2>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<h3 class="mb-4 text-3xl font-bold">Jump To</h3>

	<div>
		<ol class="list-disc pl-6">
			<li><a class="text-blue-500" href="#ingredients">Ingredients</a></li>
			<li><a class="text-blue-500" href="#instructions">Instructions</a></li>
			<li><a class="text-blue-500" href="#reheating">Reheating</a></li>
		</ol>
	</div>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md mb-4">
	<RecipeTime prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
</div>

<div class="bg-slate-50 scroll-mt-16 border border-slate-200 rounded-md md:p-8 p-4 mb-4" id="ingredients">
	<IngredientsList ingredients={recipe.ingredients} />
</div>

<div class="bg-slate-50 scroll-mt-16 border border-slate-200 rounded-md md:p-8 p-4 mb-4" id="instructions">
	<StepsList steps={recipe.steps} />

	<RecipeNote>
		<div class="font-bold text-xl border-b-2 mb-2">
			Baking Notes
		</div>

		<ol class="list-disc pl-6">
			<li>
				<span class="font-bold">The line between "baked just right" and "burned/crunchy bottom" is very fine.</span>
				You will need to get a feel for your oven to dial it in.
			</li>
			<li>
				<span class="font-bold">If you are consistently seeing the bottoms burned</span> with the middle not baked enough, try moving the baking rack higher up in the oven.
				In most ovens, the bottom is hotter than the top.
			</li>
		</ol>
	</RecipeNote>
</div>

<div class="bg-slate-50 border border-slate-200 rounded-md md:p-8 p-4 mb-4">
	<h3 class="mb-4 text-3xl font-bold scroll-mt-16" id="reheating">Reheating</h3>

	<p class="my-2">
		These cookies will harden once cooled. Some people like that. If you prefer them chewier, there are two ways to quickly re-heat them:
	</p>

	<ol class="list-disc pl-6">
		<li>
			<span class="font-bold">(Toaster) Oven - recommended:</span>
			Place the cookies on a baking sheet in the oven at 350 degrees for 2-3 minutes.
		</li>
		<li>
			<span class="font-bold">Microwave:</span>
			Place the cookies on a plate and nuke in microwave for ~10 seconds.</li>
	</ol>

	<div class="mt-4">
		<RecipeNote>
			<p class="my-2">
				I've been told these cookies keep extremely well.
				One family member said they had them in a snack bag in the car for weeks and they were still delicious by the end.
				I don't know first-hand because their survival in my house is counted in hours, not weeks.
			</p>
		</RecipeNote>
	</div>
</div>
