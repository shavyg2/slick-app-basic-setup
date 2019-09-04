# Templating
## General Templating
Templating follows the excellent templating of svelte and you can refer to their documentation. Everything you learn there can be extended upon to add value while using this framework.

## Base Template
This is an example of the base template that you can use. However, you will likely customize it at a later stage. This is just to get you started. You may not need to customize your template. Try using a layout first.

```html
<script>
  export let layout;
  export let NotFound;
  export let viewProps;
  export let loading;
  export let error;
  export let layout_props = {};
  export let view;
</script>

{#if viewProps}
  {#if viewProps.NotFound}
    <svelte:component this={viewProps.NotFound} />
  {:else}
    {#await layout_props}
      <svelte:component this={loading} />
    {:then layout_props}
      {#await viewProps}
        <svelte:component this={loading} />
      {:then props}
        {#if viewProps.NotFound}
          <svelte:component this={viewProps.NotFound} />
        {:else if layout}
          {#if props}
            <svelte:component this={layout} {...layout_props} {...props}>
              <svelte:component this={view}  {...layout_props} {...props} />
            </svelte:component>
          {:else}
            <svelte:component this={layout}>
              <svelte:component this={view} />
            </svelte:component>
          {/if}
        {:else if props}
          <svelte:component this={view} {...props} />
        {:else}
          <svelte:component this={view} />
        {/if}
      {:catch error$}
        <svelte:component this={error} error={error$} />
      {/await}
    {/await}
  {/if}
{/if}

```



## Error Template
This is a basic error template. It takes an error that is thrown and has access to the message and the stack for the error. You can display and omit to your choosing.

```html
<script>
    export let error;
</script>
<div>
    <h1 class="text-5xl">Error</h1>
    {#if !!error.message && !!error.stack}
      <pre>
          {error.message}
      </pre>
      <pre>
          {error.stack}
      </pre>
    {:else if typeof error==="string"}
        <pre>
            {error}
        </pre>
    {:else}
        <pre style="white-space: pre-wrap;">
            {JSON.stringify(error,null,2)}
        </pre>
    {/if}
</div>
```

## 404 Template
This is an example of a 404 page. It's very simple and this is something you can customize.


```html
<h1>Error 404</h1>
```