<script lang="ts">
	import type { Ingredient, IngredientUnit } from "$lib/types";
	import InlineIngredientUnit from "$components/InlineIngredientUnit.svelte";

	export let ingredient: Ingredient = {} as Ingredient;

	const getHtmlNameFromIngredientUnit = (unit: IngredientUnit) => {
		switch (unit) {
			case "teaspoon":
				return "tsp";
			case "tablespoon":
				return "tbsp";
			case "cup":
				return "cup";
			case "ounce":
				return "oz";
			case "pound":
				return "lb";
			case "gram":
				return "g";
			case "milliliter":
				return "mL";
			case "liter":
				return "L";
			default:
				throw new Error(`Unknown unit: ${unit}`);
		}
	};

	const getHtmlNameFromIngredient = (ingredient: Ingredient) => {
		const text = (() => {
			switch (ingredient.kind) {
				case "exact":
					return `${ingredient.quantity}-${getHtmlNameFromIngredientUnit(ingredient.unit)}-${ingredient.name}`;
				case "approximate":
					return ingredient.description;
			}
		})();

		return text.replace(/[^a-z0-9]/gi, "-").toLowerCase();
	};

	const ingredientHtmlName = getHtmlNameFromIngredient(ingredient);
</script>

<div class="form-ext-control form-ext-checkbox my-1">
	<input id="ingredient-check--{ingredientHtmlName}" class="form-ext-input form-ext-input--success"
				 type="checkbox" />
	<label class="form-ext-label" for="ingredient-check--{ingredientHtmlName}">
		{#if ingredient.kind === "exact"}
			<InlineIngredientUnit quantity={ingredient.quantity} unit={ingredient.unit} />
			of {ingredient.name}
		{:else if ingredient.kind === "approximate"}
			{ingredient.description}
		{/if}

		{#if ingredient.notes}
			<div><em>{ingredient.notes}</em></div>
		{/if}
	</label>
</div>
