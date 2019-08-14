<script>
  export let contents;
  export let query;
  let search = "";

  $: result = query(search);
</script>

{#if search != ''}
  <div>term: {search}</div>
{/if}
<div class="w-full text-center flex flex-row items-center justify-center mb-10">
  <span class="text-lg mx-5">Search</span>
  <input
    class="self-center outline-none"
    id="search"
    type="text"
    bind:value={search} />
</div>

{#each result as content}
  <div class=" px-10 h-full w-full mb-10">
    <div class="content card">
      <h2 class="title">{content.display || content.title}</h2>

      <p>{content.description}</p>
    </div>
  </div>
{/each}
