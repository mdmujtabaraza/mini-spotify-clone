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
      <img src={logo} class="logo" alt="Spotify" width="100px" />
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
