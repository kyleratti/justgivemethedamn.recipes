<script lang="ts">
	import type { RecipeStep } from "$lib/types";
	import CheckableInlineItem from "$components/CheckableInlineItem.svelte";

	export let steps: RecipeStep[] = [];
</script>

<div class="mb-8">
	<slot name="title" />
	{#if !$$slots.title}
		<h3 class="mb-4 text-3xl font-bold">Instructions</h3>
	{/if}

	<ol class="list-inside list-decimal">
		{#each steps as step, i}
			<ol class="not-last:my-4 text-lg">
				<CheckableInlineItem name={"steps-list--" + i} hideCheckbox>
					{i+1}. {step.description}

					{#if step.notes}
						<p class="ml-4"><em>{step.notes}</em></p>
					{/if}
				</CheckableInlineItem>
			</ol>
		{/each}
	</ol>
</div>
