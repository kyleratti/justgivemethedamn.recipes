// a classes function that lets you use it like this:
// classes("class1", "class2", { class3: !!myCondition });
export const classes = (...classes: (string | { [key: string]: boolean })[]): string =>
	classes
		.map((c) => {
			if (typeof c === "string") {
				return c;
			}

			return Object.entries(c)
				.filter(([, v]) => v)
				.map(([k]) => k)
				.join(" ");
		})
		.join(" ");
