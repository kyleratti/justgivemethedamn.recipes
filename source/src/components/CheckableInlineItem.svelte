<script lang="ts">
export let name: string;

const nameHtmlSafe = name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
</script>

<div class="my-4 text-lg flex items-baseline">
  <input
    id="checkable-thing--{nameHtmlSafe}"
    class="peer has-[:checked]:line-through mr-2"
    type="checkbox"
  />
  <label class="peer-checked:line-through inline-block flex-grow" for="checkable-thing--{nameHtmlSafe}">
    <slot />
  </label>
</div>
