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
  export let view;
</script>

{#if viewProps.NotFound}
  <svelte:component this={viewProps.NotFound} />
{:else}
  {#await viewProps}
    <svelte:component this={loading} />
  {:then props}
    {#if viewProps.NotFound}
      <svelte:component this={props.NotFound} />
    {:else if props.layout || layout}
      <svelte:component this={props.layout || layout} {...props}>
        <svelte:component this={view} {...props} />
      </svelte:component>
    {:else}
      <svelte:component this={view} {...props} />
    {/if}
  {:catch error$}
    <svelte:component this={error} error={error$} />
  {/await}
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