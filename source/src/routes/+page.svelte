<script>
	import { createTitle } from "$lib/titleUtil";
	import githubLogo from "$img/github-mark.svg";
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

<p class="my-2 text-sm italic">
	This is an open source code project. You can contribute on <a class="whitespace-nowrap inline-flex align-middle items-center" href="https://github.com/kyleratti/justgivemethedamn.recipes" target="_blank">
			<img src={githubLogo} alt="GitHub logo" class="inline h-4 w-4 mr-1" /> GitHub.
		</a>
</p>
