<script lang="ts">
	import { classes } from "$lib/classesUtil";

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="sticky top-0 z-50 bg-gray-100 border-b-2 border-red-500 p-2" id="top">
	<div class="flex justify-between">
		<a class="text-lg font-bold text-slate-800 hover:text-gray-500 md:text-2xl" href="/">
			JustGiveMeTheDamn<span class="text-red-500">.Recipes</span>
		</a>
		<div class="hidden md:flex">
			<ul class="flex flex-row py-1">
				<li class="px-2 bg-gray-50 border border-gray-500 rounded-xs mx-2">
					<a href="/recipes/pasta" class=" font-bold text-slate-800 hover:text-slate-600"
						>Pasta Recipes</a
					>
				</li>
				<li class="px-2 bg-gray-50 border border-gray-500 rounded-xs mx-2">
					<a href="/recipes/ratti" class="font-bold text-slate-800 hover:text-slate-600">
						Ratti Recipes</a
					>
				</li>
				<li class="px-2 bg-gray-50 border border-gray-500 rounded-xs mx-2">
					<a href="/recipes/seafood" class="font-bold text-slate-800 hover:text-slate-600">
						Seafood Recipes</a
					>
				</li>
				<li class="px-2 bg-gray-50 border border-gray-500 rounded-xs mx-2">
					<a href="/recipes/slow-cooker" class=" font-bold text-slate-800 hover:text-slate-600"
						>Slow Cooker Recipes</a
					>
				</li>
			</ul>
		</div>
		<div class="inline-block md:hidden">
			<button
				class="flex items-center rounded-xs border border-black px-3 py-2 text-slate-800 hover:border-gray-500 hover:text-gray-500"
				on:click={toggleMenu}
			>
				<svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
	</div>
	<div
		class={classes(
			"slide-down absolute right-0 block h-48 border-b-2 border-l-2 border-red-500 bg-gray-100 text-right ps-4 md:hidden",
			{
				["top-12"]: isMenuOpen,
				["-top-60"]: !isMenuOpen,
			},
		)}
	>
		<ul class="mt-4 flex flex-col">
			<li class="my-2">
				<a href="/recipes/pasta"
				on:click={toggleMenu}
				class="px-2 py-1 font-bold text-slate-800 hover:text-gray-500">Pasta Recipes</a>
			</li>
			<li class="my-2">
				<a
					href="/recipes/ratti"
					on:click={toggleMenu}
					class="px-2 py-1 font-bold text-slate-800 hover:text-gray-500">Ratti Recipes</a
				>
			</li>
			<li class="my-2">
				<a
					href="/recipes/seafood"
					on:click={toggleMenu}
					class="px-2 py-1 font-bold text-slate-800 hover:text-gray-500">Seafood Recipes</a
				>
			</li>
			<li class="my-2">
				<a
					href="/recipes/slow-cooker"
					on:click={toggleMenu}
					class="px-2 py-1 font-bold text-slate-800 hover:text-gray-500">Slow Cooker Recipes</a
				>
			</li>
		</ul>
	</div>
</nav>

<style lang="postcss">
	.slide-down {
		transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
	}
</style>
