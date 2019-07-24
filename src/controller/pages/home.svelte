<script>
  export let users;
  export let page;
  import {CurrentQuery,spa} from "@slick-for/svelte";
  

</script>



  <div class="navigation flex flex-row justify-around">
    <div>
      <a use:spa href={`?page=${Math.max(parseInt(page)-1,1)}`}>Prev</a>
    </div>

    <div>
      <a use:spa href={`?page=${Math.max(parseInt(page)+1,1)}`}>Next</a>
    </div>
  </div>
  <div class="flex flex-row flex-wrap">
  {#each users as user}
    <a href={`/user/${user.login}`}  use:spa>
      <div class="p-5 flex flex-row items-center">
        <div class="pb-3 flex-col">
          <img class="mb-3 rounded-full border shadow" width="150" src={user.avatar_url} alt="avatar" />
          <div class="capitalize">{user.login}</div>
        </div>
      </div>
    </a>
  {/each}
  </div>
