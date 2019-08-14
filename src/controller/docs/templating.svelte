<script>
  export let content;
</script>

<style>
  .frame {
    width: 100%;
    height: 700px;
  }

  #error {
    height: 600px;
  }
</style>

<h1 class="title">{content.title}</h1>

<h2 class="subtitle">General Templating</h2>
{#each content.p1 as item}
  <p class="textblock">{item}</p>
{/each}

<h2 class="subtitle">Base Template</h2>
{#each content.standard_content as item}
  <p class="textblock">{item}</p>
{/each}
<iframe class="gist frame" title="Template.svelte" src="/gist/template.html" />

<h2 class="subtitle">Error Template</h2>
{#each content.error_content as item}
  <p class="textblock">{item}</p>
{/each}
<iframe
  id="error"
  class="gist frame"
  title="error.svelte"
  src="/gist/error.html" />

<h2 class="subtitle">404 Template</h2>
{#each content.notfound_content as item}
  <p class="textblock">{item}</p>
{/each}
<iframe class="gist" title="error.svelte" src="/gist/404.html" />
