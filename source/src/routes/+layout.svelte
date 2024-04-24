<script lang="ts">
	import Header from "$components/Header.svelte";
	import "../app.css";
</script>

<Header />

<section class="section">
	<div class="space space--xl"></div>
	<div class="content px-1 px-0-md">
		<slot />
	</div>
</section>
