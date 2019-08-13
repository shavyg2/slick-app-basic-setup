<script>
  import {spa} from "@slick-for/svelte";
  export let menu;
  export let side;




  let show_mobile_menu=false;




  function openMobileMenu(){
    show_mobile_menu=true;
  }
  function closeMobileMenu(){
    show_mobile_menu=false;
  }


  function toggleMobileMenu(){
    const _ = show_mobile_menu?  closeMobileMenu(): openMobileMenu()
  }
</script>

<style>
  a{
    color:white;
  }


  .menu{
    position:absolute;
  }
  
</style>

<div>
  <div class="bg-gray-800 text-white p-2">
    Slick inc. <i class="fab fa-black-tie"></i>
  </div>
  <div >
    <nav class="bg-gray-800 text-white">
      <div class="mobile-menusm:hidden relative" on:click={toggleMobileMenu}>
          <i class="fas fa-bars p-2"></i>

          {#if show_mobile_menu}
          <div class="menu bg-gray-800 select-none">
            <ul>
              <a use:spa href="/docs/introduction"><li class="p-2">{side.menu1}</li></a>
              <a use:spa href="/docs/getting-started"><li class="p-2">{side.menu2}</li></a>
              <a use:spa href="/docs/template"><li class="p-2">{side.menu3}</li></a>
              <a use:spa href="/docs/controller"><li class="p-2">{side.menu4}</li></a>
              <a use:spa href="/docs/view"><li class="p-2">{side.menu5}</li></a>
              <a use:spa href="/docs/shortcuts"><li class="p-2">{side.menu6}</li></a>
            </ul>
          </div>
          {/if}

      </div>
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

    <div class="flex flex-row">
      <aside class="hidden sm:block card m-0 p-2 bg-gray-800 text-gray-200">
        <nav class="m-3">
          <ul class="w-64 text-white">
            <a use:spa href="/docs/introduction">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu1}</li>
            </a>
            <a use:spa href="/docs/getting-started">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu2}</li>
            </a>
            <a use:spa href="/docs/template">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu3}</li>
            </a>
            <a use:spa href="/docs/controller">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu4}</li>
            </a>
            <a use:spa href="/docs/view">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu5}</li>
            </a>
            <a use:spa href="/docs/shortcuts">
              <li class={`p-2 capitalize cursor-pointer`}>{side.menu6}</li>
            </a>

          </ul>

        </nav>

      </aside>
      <div class="p-2 sm:p-0 pt-10 w-full">
        <slot />
      </div>
    </div>
  </div>

</div>
