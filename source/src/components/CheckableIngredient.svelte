<script lang="ts">
	import type { ExactIngredient, Ingredient, IngredientUnit } from "$lib/types";
	import InlineIngredientUnit from "$components/InlineIngredientUnit.svelte";
	import { exhaustiveCheck } from "$lib/patternMatch";

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
			case "can":
				return "can";
			case "item":
				return "";
			default:
				return exhaustiveCheck(unit);
		}
	};

	const getHtmlValueForIngredientQuantity = (quantity: ExactIngredient["quantity"]) => {
		if (typeof quantity === "number") {
			return quantity;
		}

		return quantity.valueOf().toString();
	};

	const getHtmlNameFromIngredient = (ingredient: Ingredient) => {
		const text = (() => {
			switch (ingredient.kind) {
				case "exact":
					return `${getHtmlValueForIngredientQuantity(ingredient.quantity)}-${getHtmlNameFromIngredientUnit(ingredient.unit)}-${ingredient.name}`;
				case "approximate":
					return ingredient.description;
				default:
					return exhaustiveCheck(ingredient);
			}
		})();

		return text.replace(/[^a-z0-9]/gi, "-").toLowerCase();
	};

	const ingredientHtmlName = getHtmlNameFromIngredient(ingredient);
</script>

<div class="my-2 md:my-4">
	<input
		id="ingredient-check--{ingredientHtmlName}"
		class="peer has-[:checked]:line-through"
		type="checkbox"
	/>
	<label class="peer-checked:line-through" for="ingredient-check--{ingredientHtmlName}">
		{#if ingredient.kind === "exact"}
			<InlineIngredientUnit quantity={ingredient.quantity} unit={ingredient.unit} />
			{ingredient.name}
		{:else if ingredient.kind === "approximate"}
			{ingredient.description}
		{/if}

		{#if ingredient.notes}
			<div class="ml-4"><em>{ingredient.notes}</em></div>
		{/if}
	</label>
</div>
