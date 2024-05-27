<script lang="ts">
	import type { RecipeStep } from "$lib/types";

	export let steps: RecipeStep[] = [];
</script>

<div class="mt-4 pb-8">
	<slot name="title" />
	{#if !$$slots.title}
		<h3 class="mb-2 text-2xl font-bold">Instructions</h3>
	{/if}

	<ol class="list-inside list-decimal">
		{#each steps as step}
			<li class="mb-2 text-lg">
				{step.description}

				{#if step.notes}
					<p class="ml-4"><em>{step.notes}</em></p>
				{/if}
			</li>
		{/each}
	</ol>
</div>
