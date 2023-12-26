<script lang="ts">
  import "../app.scss";
  import "../app.pcss";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

{data.user?.display_name}

<slot />
