<script lang="ts">
  import "../app.scss";
  import "../app.pcss";
  import type { LayoutData } from "./$types";
  import { Navigation } from "$components";

  let topbar: HTMLElement;
  let scrollY: number;
  let headerOpacity = 0;

  export let data: LayoutData;

  $: if (topbar) {
    headerOpacity = Math.min(2, scrollY / topbar.offsetHeight);
    // headerOpacity = scrollY / topbar.offsetHeight < 2 ? scrollY / topbar.offsetHeight : 2;
    // console.log(headerOpacity);
  }

  // $: console.log(topbar && scrollY / topbar.offsetHeight);
  $: user = data.user;
</script>

<!-- {data.user?.display_name} -->

<svelte:window bind:scrollY />

<div id="main">
  {#if user}
    <div id="sidebar">
      <Navigation desktop={true} />
    </div>
  {/if}
  <div id="content">
    <div id="topbar" bind:this={topbar}>
      <div
        class="topbar-bg"
        style:background-color="var(--header-color)"
        style:opacity={headerOpacity}
      />
      Topbar
    </div>
    <main id="main-content" class:logged-in={user}>
      <slot />
    </main>
  </div>
</div>

<style lang="scss">
  #main {
    display: flex;
    #content {
      flex: 1;
      #topbar {
        position: fixed;
        height: var(--header-height);
        padding: 0 15px;
        display: flex;
        align-items: center;
        width: 100%;
        z-index: 100;
        .topbar-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }
        @include breakpoint.up("md") {
          padding: 0 30px;
          width: calc(100% - var(--sidebar-width));
        }
      }
      main#main-content {
        padding: 30px 15px 60px;
        @include breakpoint.up("md") {
          padding: 30px 30px 60px;
        }
        &.logged-in {
          padding-top: calc(30px + var(--header-height));
        }
      }
    }
  }
</style>
