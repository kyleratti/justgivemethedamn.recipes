<script lang="ts">
	import type { ExactIngredient, IngredientUnit } from "$lib/types";
	import Fraction from "fraction.js";

	export let unit: IngredientUnit;
	export let quantity: ExactIngredient["quantity"];

	const quantityAsFraction = new Fraction(quantity).toFraction(true);
</script>

{#if unit === "pound"}
	{quantityAsFraction} <abbr title="pound">lb</abbr>
{:else if unit === "ounce"}
	{quantityAsFraction} <abbr title="ounce">oz</abbr>
{:else if unit === "gram"}
	{quantityAsFraction} <abbr title="gram">g</abbr>
{:else if unit === "milliliter"}
	{quantityAsFraction} <abbr title="milliliter">mL</abbr>
{:else if unit === "teaspoon"}
	{quantityAsFraction} <abbr title="teaspoon">tsp</abbr>
{:else if unit === "tablespoon"}
	{quantityAsFraction} <abbr title="tablespoon">tbsp</abbr>
{:else if unit === "can"}
	{quantityAsFraction} {quantity === 1 ? "can" : "cans"}
{:else if unit === "item"}
	{quantityAsFraction}
{:else}
	{quantityAsFraction} {unit}
{/if}
