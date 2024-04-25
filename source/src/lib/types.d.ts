import Fraction from "fraction.js";

type IngredientUnit =
	| "pound"
	| "ounce"
	| "gram"
	| "liter"
	| "milliliter"
	| "teaspoon"
	| "tablespoon"
	| "cup"
	| "can"
	| "item"
	| "bunch";

type ExactIngredient = {
	quantity: number | Fraction;
	unit: IngredientUnit;
	name: string;
};

type ApproximateIngredient = {
	description: string;
};

export type Ingredient =
	| ({ kind: "exact"; notes?: string } & ExactIngredient)
	| ({ kind: "approximate"; notes?: string } & ApproximateIngredient);

export type RecipeStep = {
	description: string;
	notes?: string;
};

export type CookingRecipe = {
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	ingredients: Ingredient[];
	steps: RecipeStep[];
};

export type Contributor = { kind: "person"; name: string } | { kind: "website"; url: string };
