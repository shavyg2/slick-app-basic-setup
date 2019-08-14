<script>
  export let content;

  import {isHeading,asHeading} from "../../util/fmt/formatting.ts";
</script>

<style>
    #control-flow{
        height:650px;
    }


    #main-ts{
        width:100%;
        height:1000px;
    }
</style>

<article class="flex flex-col container mx-auto md:w-1/2">
  <h1 class="title">{content.title}</h1>



    {#each content.overview as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}
    <img class="embed" src="/image/src-view.png" alt="project structure"/>
    <ul class="list-disc p-2">
    {#each content.overview_content as text}
        <li class="font-sans my-2">{text}</li>
    {/each}
    </ul>




    <h2 class="subtitle">{content.main_sub}</h2>
    <iframe class="" id="main-ts" title="main.ts" src="/gist/main-ts.html"/>

    {#each content.main_content as text}
    {#if isHeading(text)}
      <h2 class="subtitle">{asHeading(text)}</h2>
    {:else}
      <p class="textblock">{text}</p>
    {/if}
  {/each}



    <h2 class="subtitle">{content.controller_sub}</h2>
    {#each content.controller_content as text}
        <p class="textblock">{text}</p>
    {/each}

    <iframe title="Controller Plain" src="/gist/controller-plain.html"/>
    
    
    <h2 class="subtitle">{content.view_sub}</h2>
    {#each content.view_content as text}
        <p class="textblock">{text}</p>
    {/each}

     <iframe id="control-flow" class="my-5" title="Control Flow w-full" width="100%"  src="/gist/sample1.html" />

</article>
