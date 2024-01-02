<script lang="ts">
  // import type {Icon} from "@iconify/svelte";
  //   import type { ComponentType } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    icon: string;
    label: string;
  }
  // export let icon: ComponentType<Icon>

  import Icon from "@iconify/svelte";
  export let icon: string;
  export let label: string;
</script>

<button on:click on:mouseover on:focus on:keydown {...$$restProps}
  ><Icon {icon} style="color: var(--text-color);" />
  <span class="visually-hidden">{label}</span>
</button>

<style lang="scss">
  button {
    // border: none;
    // background: none;
    // cursor: pointer;
    // padding: 0;
    width: 38px;
    height: 38px;
    :global(svg) {
      vertical-align: middle;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:active {
      background-color: var(--menu-background-color);
    }
  }
</style>
