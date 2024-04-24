<script>
	import { createTitle } from "$lib/titleUtil";
</script>

<svelte:head>
	<title>{createTitle("Home")}</title>
</svelte:head>

<h1 class="mb-2 text-3xl font-bold">Welcome</h1>

<p class="my-2">
	Tired of awful recipe websites that make you scroll through a billion ads and the author's entire
	family history just to find the recipe?
</p>

<p class="my-2 font-bold">Me too.</p>

<p class="my-2">
	Allow me to shut up and give you the damn recipe. Use the navigation above to find what you need.
</p>
