# The Basics

## Getting the View

Simply add the view import and the url to navigate to the view using the ```@View``` decorator.

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

This will render the svelte component when navigating to the url ```/my/page```



## Getting Data to the View

Simply return an object with keys, and these keys will be sent to the view

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



## Getting Async Data to the View

Just get async data using es6, slick doesn't try to invent new ways of doing things, stick to what you know.
As long as a promise is returned with the required data, you can get this data.

Note it has to be an Object or Promise containing an Object that is returned as the keys for the object is used as the props in the view.

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
You don't have to wait for the Promise to be resolved in the controller however.
It is perfectly find to pass it to the view and use svelte await syntex

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

Slick does try to live up to it's name. It tries to do things in an intuitive manner.
For example let's say you need a parameter from the url. It shouldn't require too much
work to get it. It would be nice to get it in a way where you think to yourself. "That's slick"!!


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

The way slick does this is instead of the developer doing work to get details
about the application. Slick just allows you to ask for what you need and doesn't get in the way too much.

The ```Param``` decorator and the ```Query``` decorator makes it easy to access things that are in the url that you need.

See some of the other decorators you can use to gather things

|Decorators|Description|Usage|
|----------|-----------|-----|
|@Param    | Use this to get information from the current url of the application. Use the transform functions to further manipulate and coerce the data into the shape you need. ```ParseInt``` anyone? | ```@Param(key?:string,...transformFunction:any[])```|
|@Query    | Use this to access query parameters that are passed using ```?key=value```. These values are all strings and needs to be transformed if exist.|```@Query(key?:string,...transformFunctions:any[])```|
|@History  | Use this to access the history plugin used to navigate the application routes. [Documentation](https://github.com/ReactTraining/history), sometimes you need control.| ```@History() history```|
|@Inject   | Use this to Inject Services that are not based on classes. See section on providers to get a clear understanding.| ```@Inject(apiurl) endpoint```|
|***Class Constructor***| Any class that is registered using the ```@Injectable``` will automatically be injected when added as a parameter. There is nothing special you need to do here. Just tell the framework what you need.| ```userRepo:UserRepo```




## Scope


### Transient

### Request

### Singleton
