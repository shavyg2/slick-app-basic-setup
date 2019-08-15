<script>
    export let data;
    export let json;
</script>


{#if json}
    <pre>
        {JSON.stringify(data,null,2)}
    </pre>
{:else}
<div>
    <div>
        <img src={data.avatar_url} alt="user avatar"/>
    </div>

    <div>{data.login}</div>
</div>
{/if}