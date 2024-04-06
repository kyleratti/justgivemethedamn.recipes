type IngredientUnit =
	| "pound"
	| "ounce"
	| "gram"
	| "liter"
	| "milliliter"
	| "teaspoon"
	| "tablespoon"
	| "cup";

type ExactIngredient = {
	quantity: number;
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
