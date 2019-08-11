<script>
  import {spa} from "@slick-for/svelte";
  export let menu;
  export let side;
</script>

<style>
  a{
    color:white;
  }
  
</style>

<div>
  <div class="bg-gray-800 text-white p-2">
    Slick inc. <i class="fab fa-black-tie"></i>
  </div>
  <div >
    <nav class="bg-gray-800 text-white">
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
      <aside class="card m-0 p-2 bg-gray-800 text-gray-200">
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
              <li class={`p-2 capitalize cursor-pointer`}>Controller</li>
            </a>
            <a use:spa href="/docs/view">
              <li class={`p-2 capitalize cursor-pointer`}>Views</li>
            </a>
            <a use:spa href="/docs/shortcuts">
              <li class={`p-2 capitalize cursor-pointer`}>Param shortcuts</li>
            </a>

          </ul>

        </nav>

      </aside>
      <div class="pt-10 w-full">
        <slot />
      </div>
    </div>
  </div>

</div>
