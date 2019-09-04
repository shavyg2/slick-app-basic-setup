<script>
  import { spa } from "@slick-for/svelte";
  export let nav;
  export let side;

  let show_mobile_menu = false;

  function openMobileMenu() {
    show_mobile_menu = true;
  }
  function closeMobileMenu() {
    show_mobile_menu = false;
  }

  function toggleMobileMenu() {
    const _ = show_mobile_menu ? closeMobileMenu() : openMobileMenu();
  }
</script>

<style>
  a {
    color: white;
  }

  .side-menu {
    position: sticky;
    top: 0;
  }

  aside {
    flex-basis: 300px;
    flex-shrink: 0;
  }

  .sticky-menu {
    position: sticky;
    top: 0;
  }

  .menu {
    position: absolute;
  }
</style>

<div class="h-full">
  <div class="h-full flex flex-col">
    <div class="bg-gray-800 text-white p-2">
      Slick inc.
      <i class="fab fa-black-tie" />
    </div>
    <!--  -->
    <div class="sticky-menu flex flex-row">
      <div
        class="sticky-menu md:hidden relative bg-gray-800 text-white"
        on:click={toggleMobileMenu}>
        <i class="fas fa-bars p-2" />

        {#if show_mobile_menu}
          <div class="menu bg-gray-800 select-none w-32">
            <ul>

              {#each side.menus as menu}
                <a use:spa href={menu.url}>
                  <li class="p-2">{menu.label}</li>
                </a>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
      <nav class="bg-gray-800 text-white w-full">
        <ul class="flex flex-row justify-end">
          {#each nav.menus as menu}
            <a href={menu.url} target="_blank">
              <li class="p-2 px-3 font-bold">
                {menu.label}
                <i class="fas fa-file" />
              </li>
            </a>
          {/each}
        </ul>
      </nav>

    </div>
    <!--  -->
    <div class="flex flex-row flex-grow">
      <aside class="hidden md:block card m-0 p-2 bg-gray-800 text-gray-200">
        <nav class="side-menu m-3">
          <ul class="text-white">
            {#each side.menus as menu}
              <a use:spa href={menu.url}>
                <li class="p-2 capitalize cursor-pointer">{menu.label}</li>
              </a>
            {/each}
          </ul>

        </nav>

      </aside>
      <div class="p-2 md:p-0 pt-10 flex-grow w-full" on:click={closeMobileMenu}>
        <article
          class="flex flex-col h-full container p-2 mx-auto md:w-3/4 xl:w-3/5
          pb-10">
          <slot />
        </article>
      </div>
    </div>
  </div>

</div>
