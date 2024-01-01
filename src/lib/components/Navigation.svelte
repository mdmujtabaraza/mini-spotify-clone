<script lang="ts">
  import Icon from "@iconify/svelte";
  // import { type ComponentType } from "svelte";
  import logo from "$assets/Spotify_Logo_RGB_White.png";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  export let desktop: boolean;
  const openMenu = () => {
    isMobileMenuOpen = true;
  };
  const closeMenu = () => {
    isMobileMenuOpen = false;
  };

  let isMobileMenuOpen = false;
  $: isOpen = desktop || isMobileMenuOpen;

  const menuItems: { path: string; label: string; icon: string }[] = [
    {
      path: "/",
      label: "Home",
      icon: "lucide:home",
    },
    {
      path: "/search",
      label: "Search",
      icon: "lucide:search",
    },
    {
      path: "/playlists",
      label: "Playlists",
      icon: "lucide:list-music",
    },
  ];
</script>

<svelte:head>
  {#if !desktop && isMobileMenuOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<div class="nav-content" class:desktop class:mobile={!desktop}>
  {#if !desktop && isOpen}
    <div
      class="overlay"
      on:click={closeMenu}
      transition:fade={{ duration: 200 }}
    />
  {/if}
  <nav aria-label="Main">
    {#if !desktop}
      <button on:click={openMenu}>Open</button>
    {/if}
    <div class="nav-content-inner" class:is-hidden={!isOpen}>
      {#if !desktop}
        <button on:click={closeMenu}>Close</button>
      {/if}
      <img src={logo} class="logo" alt="Spotify" />
      <!-- <div class="menu-items">
        {#each menuItems as { path, label, icon }}
          <a href={path} class="menu-item">
            <Icon {icon} width="24" height="24" />
            <span>{label}</span>
          </a>
        {/each}
      </div> -->
      <ul>
        {#each menuItems as item}
          <li class:active={item.path === $page.url.pathname}>
            <a href={item.path}
              ><Icon
                icon={item.icon}
                style="color: var(--text-color); font-size: 26px;"
              />
              {item.label}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</div>

<style lang="scss">
  .nav-content {
    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      // background-color: rgba(0, 0, 0, 0.5);
      background-color: var(--sidebar-color);
      opacity: 0.75;
      z-index: 100;
      @include breakpoint.up("md") {
        display: none;
      }
    }
    .logo {
      max-width: 100%;
      width: 130px;
    }
    .nav-content-inner {
      padding: 20px;
      min-width: var(--sidebar-width);
      background-color: var(--sidebar-color);
      height: 100vh;
      overflow: auto; // allow scrolling if the content is too long
      display: none;
      ul {
        padding: 0;
        margin: 20px 0 0;
        // list-style: none;  // already removed by tailwind
        li {
          &.active {
            a {
              opacity: 1;
            }
          }
          a {
            display: flex;
            align-items: center;
            // text-decoration: none;  // already removed by tailwind
            color: var(--text-color);
            font-size: functions.toRem(14);
            font-weight: 500;
            padding: 5px;
            margin: 10px 0;
            opacity: 0.7;
            transition: opacity 0.2s;
            &:hover,
            &:focus {
              opacity: 1;
            }
            :global(svg) {
              margin-right: 12px;
            }
          }
        }
      }
    }
    &.desktop {
      position: sticky;
      top: 0;
      .nav-content-inner {
        @include breakpoint.up("md") {
          display: block;
        }
      }
    }
    &.mobile .nav-content-inner {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      transition:
        transform 200ms,
        opacity 200ms;
      &.is-hidden {
        transform: translateX(-100%);
        opacity: 0;
      }
      @include breakpoint.down("md") {
        display: block;
      }
    }
  }
</style>
