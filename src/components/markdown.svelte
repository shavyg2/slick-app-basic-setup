<script>
  export let html;
  import {css} from "emotion"

  import hljs from "highlightjs";
  import {onMount,tick,afterUpdate} from "svelte";


  let root;


  async function  Code(){
    if(root){
      root.querySelectorAll("pre code").forEach(block => {
          console.log(block)
        hljs.highlightBlock(block);
      });
    }
  }


  afterUpdate(Code)


</script>

<svelte:head>

<style>

  .markdown-body{
    color: #333;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    max-width:100%;
  }

  .markdown-body code{
    color:white;
  }

  .markdown-body h1{
    color:#444;
    margin-bottom: 0.75rem;
  }
  .markdown-body h2{
    font-size: 1.25rem;
    color: #718096;
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;
  }


  .markdown-body p {
    font-weight: 200;
    margin-bottom: 1.5rem;
    max-width: 600px;
    word-wrap: break-word;
    width: 100%;
  }


  
  .markdown-body ul {
    list-style-type: disc;
  }


  .markdown-body p {
    max-width:600px;
  }

  .markdown-body h1, .markdown-body h2{
    text-decoration: none;
    border-width: 0;
  }


  .markdown-body pre{
    background-color:#1E1E1E;
    max-width:100%;
    overflow:auto;
  }
  .markdown-body code{
    background-color:#1E1E1E;
    max-width:100%;
    overflow-x:auto !important;
  }

  .markdown-body img{
    max-width:100%;
  }
</style>

</svelte:head>






<div bind:this={root}>
{#await html}
  <div class="fake-header"></div>
{:then html}
  
  <div  bind:this={root} class="markdown-body">
    {@html html}
  </div>

{/await }
</div>




