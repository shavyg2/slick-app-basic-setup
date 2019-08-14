<script>
  import is from "@sindresorhus/is";
  import { spa } from "@slick-for/svelte";
  export let intro;
  import { isHeading, asHeading } from "../../util/fmt/formatting.ts";
</script>

<style>
  #control-flow {
    height: 650px;
  }
</style>

<div class="container mx-auto md:w-1/2">

  <div class="title">{intro.title}</div>

  {#each intro.p1 as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}
  <iframe
    id="control-flow"
    class="my-5"
    title="Control Flow w-full"
    width="100%"
    src="/gist/sample1.html" />

  {#each intro.p2 as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}

  <ul class="list-disc p-2 pl-8 pb-6">
    {#each intro.dependency as item}
      <li class="my-1">{item}</li>
    {/each}
  </ul>

{#each intro.p3 as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}

  <div class="subtitle">{intro.sub3}</div>
  <div class="mb-10">
    You can get started by cloning this repo. The documentation is built with
    slick. You can go through a
    <a use:spa href="/svelte/docs/getting-started">guided walk through</a>
    or clone the 
    <a href="https://github.com/shavyg2/slick-app-basic-setup"> repository.</a>
  </div>

</div>
