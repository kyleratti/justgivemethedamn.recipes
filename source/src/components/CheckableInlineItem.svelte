<script lang="ts">
export let name: string;
export let hideCheckbox: boolean | undefined;

const nameHtmlSafe = name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
</script>

<div class="text-lg inline-flex items-baseline">
  <input
    id="checkable-thing--{nameHtmlSafe}"
    class={"peer has-checked:line-through mr-2 " + (hideCheckbox ? "sr-only" : "")}
    type="checkbox"
  />
  <label class="peer-checked:line-through peer-checked:text-gray-500 peer-checked:italic inline-block grow" for="checkable-thing--{nameHtmlSafe}">
    <slot />
  </label>
</div>
