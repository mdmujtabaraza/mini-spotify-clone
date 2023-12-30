<script lang="ts">
  import "../app.scss";
  import "../app.pcss";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: user = data.user;
</script>

<!-- {data.user?.display_name} -->

<div id="main">
  <div id="content">
    <main id="main-content">
      <slot />
    </main>
  </div>
</div>

<style lang="scss">
  #main {
    #content {
      main#main-content {
        padding: 30px 15px 60px;
        @include breakpoint.up("md") {
          padding: 30px 30px 60px;
        }
      }
    }
  }
</style>
