<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import "../app.css";
</script>

<Header />

<section class="p-2 md:p-4">
	<div class="mx-auto w-full lg:max-w-screen-md">
		<slot />
	</div>
</section>

<Footer />
