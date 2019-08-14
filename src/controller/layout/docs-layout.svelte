<script>
  import { spa } from "@slick-for/svelte";
  export let menu;
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

  .sticky-menu {
    position: sticky;
    top: 0;
  }

  .menu {
    position: absolute;
  }
</style>

<div>
  <div>
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
              <a use:spa href="/svelte/docs/introduction">
                <li class="p-2">{side.menu1}</li>
              </a>
              <a use:spa href="/svelte/docs/getting-started">
                <li class="p-2">{side.menu2}</li>
              </a>
              <a use:spa href="/svelte/docs/template">
                <li class="p-2">{side.menu3}</li>
              </a>
              <a use:spa href="/svelte/docs/controller">
                <li class="p-2">{side.menu4}</li>
              </a>
              <a use:spa href="/svelte/docs/view">
                <li class="p-2">{side.menu5}</li>
              </a>
              <a use:spa href="/svelte/docs/shortcuts">
                <li class="p-2">{side.menu6}</li>
              </a>
            </ul>
          </div>
        {/if}
      </div>
      <nav class="bg-gray-800 text-white w-full">
        <ul class="flex flex-row justify-end">
          <li class="p-2 px-3 font-bold">
            {menu.content1}
            <i class="fas fa-file" />
          </li>

          <li class="p-2 px-3 font-bold">
            {menu.content2}
            <i class="fab fa-github" />
          </li>
        </ul>
      </nav>

    </div>
    <!--  -->
    <div class="flex flex-row">
      <aside class="hidden md:block card m-0 p-2 bg-gray-800 text-gray-200">
        <nav class="side-menu m-3">
          <ul class="w-64 text-white">
            <a use:spa href="/svelte/docs/introduction">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu1}</li>
            </a>
            <a use:spa href="/svelte/docs/getting-started">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu2}</li>
            </a>
            <a use:spa href="/svelte/docs/template">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu3}</li>
            </a>
            <a use:spa href="/svelte/docs/controller">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu4}</li>
            </a>
            <a use:spa href="/svelte/docs/view">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu5}</li>
            </a>
            <a use:spa href="/svelte/docs/shortcuts">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu6}</li>
            </a>

          </ul>

        </nav>

      </aside>
      <div class="p-2 md:p-0 pt-10 w-full" on:click={closeMobileMenu}>
        <article class="flex flex-col container p-2 mx-auto lg:w-3/4 xl:w-3/5">
        <slot />
        </article>
      </div>
    </div>
  </div>

</div>
