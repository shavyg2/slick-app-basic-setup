# The Basics

## Getting the View

Simply import a svelte file and add the url to navigate to the view using the ```@View``` decorator.
This will render the svelte component when navigating to the url ```/my/page```

```typescript
import {Controller,View} from "@slick-for/svelte"
import Page from "./my/page.svelte";

@Controller("/my")
class MyController{

    @View("/page",Page)    
    MethodNameDoesntMatter(){
        
    }
}
```




## Getting Data to the View

Simply return an object with keys, and these keys will be sent to the view as props

```typescript
    import {Controller,View} from "@slick-for/svelte"
    import Page from "./my/page.svelte";

    @Controller("/my")
    class MyController{


    @View("/page",Page)    
    MethodNameDoesntMatter(){
        return {
            text:"world"
        }
    }
}
```

```html

<script>
    export let text
</script>

<div>Hello {text}</div>

```


This will produce
```html
<div>Hello world</div>
```



## Getting Async Data to the View (Just do it!)

Simply mark a method async or return a promise.

```typescript
import {Controller,View} from "@slick-for/svelte"
import Page from "./my/page.svelte";

@Controller("/my")
class MyController{

    async getAsyncData(){
        let res = await fetch("http://api.example.com/data")
        return res.json();
    }

    @View("/page",Page)    
    async MethodNameDoesntMatter(){
        let data = await this.getAsyncData()
        return {
            data
        }
    }
}
```
<p class="bg-red-500 text-white border border-red-700 p-2 rounded mx-auto">
You don't have to wait for the Promise to be resolved in the controller however.
It is perfectly fine to pass it to the view and use svelte await syntax.
</p>

```html
{#await data}
    <div>Loading</div>
{:then props}
    <div>...{props}</div>
{:catch error}
    <div>Client Error</div>
{/await}
```



## Getting Data from the url

Parameters and Query strings are easy to obtain from the url.
use ```@Param``` and ```@Query``` to get access to these.


```typescript
import {Controller,View,Param} from "@slick-for/svelte"
import UserPage from "./my/page.svelte";

@Controller("/user")
class MyController{

    async getAsyncData(){
        let res = await fetch("http://api.example.com/data")
        return res.json();
    }

    @View("/:username",UserPage)    
    async MethodNameDoesntMatter(@Param('username') username:string){
        let userdata = await this.getAsyncData(username)
        return {
            userdata
        }
    }
}
```

<!-- |Decorators|Description|Usage|
|----------|-----------|-----|
|@Param    | Use this to get information from the current url of the application. Use the transform functions to further manipulate and coerce the data into the shape you need. ```ParseInt``` anyone? | ```@Param(key?:string,...transformFunction:any[])```|
|@Query    | Use this to access query parameters that are passed using ```?key=value```. These values are all strings and needs to be transformed if exist.|```@Query(key?:string,...transformFunctions:any[])```|
|@History  | Use this to access the history plugin used to navigate the application routes. [Documentation](https://github.com/ReactTraining/history), sometimes you need control.| ```@History() history```|
|@Inject   | Use this to Inject Services that are not based on classes. See section on providers to get a clear understanding.| ```@Inject(apiurl) endpoint```|
|***Class Constructor***| Any class that is registered using the ```@Injectable``` will automatically be injected when added as a parameter. There is nothing special you need to do here. Just tell the framework what you need.| ```userRepo:UserRepo```
 -->
