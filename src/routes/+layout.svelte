<script lang="ts">
  import "../app.scss";
  import "../app.pcss";
  import type { LayoutData } from "./$types";
  // import LogoutButton from "$components/LogoutButton.svelte";
  import { LogoutButton } from "$components";

  export let data: LayoutData;

  $: user = data.user;
</script>

<!-- {data.user?.display_name} -->

{#if user}
  <h1>Hello {user.display_name}</h1>
  <LogoutButton />
{/if}

<slot />
