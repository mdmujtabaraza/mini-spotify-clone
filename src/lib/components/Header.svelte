<script lang="ts">
  import { browser } from "$app/environment";
  import { Navigation } from "$components";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  $: user = $page.data.user;
</script>

<div class="content">
  <div class="left">
    {#if browser}
      <Navigation desktop={false} />
    {/if}
  </div>
  <div class="right">
    <div id="profile-button">
      <button class="profile-button">
        {#if user?.images && user.images.length > 0}
          <img src={user.images[0].url} alt={user.display_name} />
        {/if}
        {user?.display_name} <span class="visually-hidden">Profile Menu</span>
        <Icon
          icon="lucide:chevron-down"
          class="profile-arrow"
          style="font-size:22px;"
        />
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .profile-button {
    // background: none;
    // border: none;
    // cursor: pointer;
    border: 1px solid var(--border);
    padding: 5px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color: var(--text-color);
    :global(.profile-arrow) {
      margin-left: 3px;
    }
    img {
      width: 28px;
      height: 28px;
      border-radius: 100%;
      margin-right: 10px;
    }
    &:hover {
      background-color: var(--accent-color);
    }
  }
</style>
