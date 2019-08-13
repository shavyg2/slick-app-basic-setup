
<script>
  export let content;
</script>
<style>
  .gist {
    height: 700px;
  }
</style>

<div class="container mx-auto md:w-1/2">

  <h1 class="title">Controller</h1>

  <p class="textblock">
    There are lots of things that can get done in a Controller. For Example you
    can add a dependencies that the controller needs to complete it's task.
  </p>

  <iframe
    class="gist"
    title="Controller with Injections"
    src="/gist/controller-injection.html" />


  <h2 class="subtitle">Let's break it down</h2>

  {#each content as text}

  <p class="textblock">
    {text}
  </p>
  {/each}
</div>
