<script lang="ts">
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from "svelte/elements";

  // Generics are types that can be specified at runtime based on the user input
  // In this case, we are defining a generic type that can be either "button" or "a"
  type Element = $$Generic<"button" | "a">;

  interface ButtonComponentElements {
    button: HTMLButtonAttributes;
    a: HTMLAnchorAttributes;
  }

  // define props and inherit props from other stuff
  // extend new interface that we created called ButtonComponentElements
  type $$Props = ButtonComponentElements[Element] & {
    element: Element;
    variant?: "solid" | "outline" | "danger";
    className?: string;
  };

  export let element: Element;
  export let variant: "solid" | "outline" | "danger" = "solid";
  export let className: string = ""; // add custom class names to our button
</script>

<svelte:element
  this={element}
  class="button button-{variant} {className}"
  on:click
  {...$$restProps}
>
  <slot />
</svelte:element>

<style lang="scss">
  .button {
    display: inline-block;
    border: none;
    font-weight: 600;
    font-size: functions.toRem(14);
    border-radius: 20px;
    cursor: pointer;
    padding: 7px 15px;
    text-decoration: none;
    &.button-solid {
      background-color: var(--accent-color);
      color: #000;
      border: 2px solid var(--accent-color);
    }
    &.button-outline {
      background: none;
      color: var(--text-color);
      border: 2px solid;
    }
    &.button-danger {
      background: var(--error);
      color: #fff;
      border: 2px solid var(--error);
    }
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
    &:hover {
      &.button-solid,
      &.button-danger {
        background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
      }
      &.button-outline {
        background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
      }
    }
    &:active {
      &.button-solid,
      &.button-danger {
        background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
      }
      &.button-outline {
        background-image: linear-gradient(rgba(255, 255, 255, 0.2) 0 0);
      }
    }
  }
</style>
