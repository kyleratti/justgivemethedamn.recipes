<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import "../app.css";
</script>

<div class="bg-gray-100 text-slate-800 min-h-screen">
	<div class="max-w-5xl mx-auto ">
		<Header />

		<section class="p-2 md:p-4 mt-2">
			<div class="mx-auto w-full lg:max-w-(--breakpoint-md)">
				<slot />
			</div>
		</section>

		<Footer />
	</div>
</div>