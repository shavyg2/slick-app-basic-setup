<script>
  import is from "@sindresorhus/is";
  import {spa} from "@slick-for/svelte";
  export let intro;
</script>

<style>
    #control-flow{
        height:650px;
    }

</style>

<div class="container mx-auto md:w-1/2">

  <div class="title">{intro.title}</div>

  <div class="subtitle">{intro.sub1}</div>

  {#if is.array(intro.p1)}
    {#each intro.p1 as text}
      <p class="text">{text}</p>
    {/each}
  {:else}
    <pre class="textblock font-sans break-words">{intro.p1}</pre>
  {/if}
  <iframe id="control-flow" class="my-5" title="Control Flow w-full" width="100%"  src="/gist/sample1.html" />

  <div class="subtitle">{intro.sub2}</div>
  {#if is.array(intro.p2)}
    {#each intro.p2 as text}
      <p class="text">{text}</p>
    {/each}
  {:else}
    <p class="textblock font-sans break-words">{intro.p2}</p>
  {/if}

    <ul class="list-disc p-5">
        {#each intro.dependency as item}
            <li class="my-4">{item}</li>
        {/each}
    </ul>

   {#each intro.sub2_5 as text}
      <p class="text">{text}</p>
    {/each} 

  <div class="subtitle">{intro.sub3}</div>
  <div class="mb-10">
    You can get started by cloning this repo. The documentation is built 
    with slick.
    You can go through a <a use:spa href="/docs/getting-started">guided walk through</a> or clone the repository.
     <a href="https://github.com/shavyg2/slick-app-basic-setup">Check it out</a>
  </div>

</div>
