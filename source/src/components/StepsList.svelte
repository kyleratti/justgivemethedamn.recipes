<script lang="ts">
	import type { RecipeStep } from "$lib/types";

	export let steps: RecipeStep[] = [];
</script>

<h3>Instructions</h3>

<ol>
	{#each steps as step}
		<li>
			{step.description}

			{#if step.notes}
				<p class="notes"><em>{step.notes}</em></p>
			{/if}
		</li>
	{/each}
</ol>
