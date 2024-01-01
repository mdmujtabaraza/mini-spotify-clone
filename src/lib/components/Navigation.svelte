<script lang="ts">
  import Icon from "@iconify/svelte";
  // import { type ComponentType } from "svelte";
  import logo from "$assets/Spotify_Logo_RGB_White.png";
  import { page } from "$app/stores";

  export let desktop: boolean;
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

<div class="nav-content" class:desktop class:mobile={!desktop}>
  <nav aria-label="Main">
    <div class="nav-content-inner">
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
  }
</style>
