<script>
  import { isHeading, asHeading } from "../../util/fmt/formatting.ts";

  export let content;
</script>

<style>
  .gist {
    height: 750px;
  }
</style>

<div class="container mx-auto w-full p-2 lg:w-3/4">

  <h1 class="title">Controller</h1>

   {#each content.intro as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}

  <iframe
    class="gist"
    title="Controller with Injections"
    src="/gist/controller-injection.html" />

  <h2 class="subtitle">Let's break it down</h2>

  {#each content.detail as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}
</div>
