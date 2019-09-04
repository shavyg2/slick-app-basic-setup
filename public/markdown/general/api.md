# Api
<!--  -->
<br/>

## @Controller

**Type** ```Class Decorator```

**Description**

Set a class as a controller. A Controller allows a common route for a series of pages.

### Usage

```typescript
@Controller("/profile", options)
export class ProfileController{

}
```

#### options 

|Property|Default|description|
|--------|-------|-----------|
|layout  |```undefined``` |A svelte import that uses the ```<slot />``` element. Your views will be placed where the slot is.
|loading |```undefined``` |A svelte import that will be shown while the page is loading
|error   |```undefined``` |A svelte import that will be shown when an error occurs on this route. Overwrites the base error page.
|pause   |```400```       |Time in ```ms``` to wait for a page to be rendered before switching the loading page. Which ever comes first

<!--  -->
<br/>

## @LayoutProps

**Type** ```Method Decorator```

**Description**

Sets a method to use to send data to the view. This is shared by all views

### Usage

```typescript
@LayoutProps
method(){
    return {
        props:"For the layout"
    }
}
```


<!--  -->
<br/>

## @View

**Type** ```Method Decorator```

**Description**

Allows a page to be routed and sets the method that will be used to get the page data.

### Usage

```typescript
@View(route,Page)
method(){

}
```

|Argument|Description|
|------|------|
|route| This is the url that will load a svelte component|
|Page | An imported Svelte Component|







<!--  -->
<br/>


## @Param

**Type** ```Param Decorator```

**Description**

Get data from the url.

### Usage

```typescript
// /user/paul
@View("/user/:username",Page)
method(@Param(key,...transform) username:string){
    console.log(username) //paul
}
```
|Argument|Default|Description|
|------|------|------|
|key<optional>|```undefined```|This gets the params from the url. If the key is left empty it will get the entire param object.
|transform<optional>|```undefined```| This will take the param or the previously transformed param and run it through the provided functions. This is an variadic parameter.

<!--  -->
<br/>


## @Query
**Type**
```Param Decorator```

**Description**

Get data from the url query string

### Usage

```typescript
// /user?username=paul
@View("/user")
method(@Query(key,...transform) username:string){

    console.log(username) //paul
}
```
|Argument|Default|Description|
|------|------|------|
|key<optional>|```undefined```|This gets the query param from the url. If the key is left empty it will get the entire query object.
|transform<optional>|```undefined```| This will take the query param or the previously transformed query param and run it through the provided functions. This is an variadic parameter.

<!--  -->
<br/>


## @Inject
**Type**
```Param Decorator```

**Description**

Injects Injectable classes and providers

### Usage

```typescript
// /user?username=paul
@View("/user")
method(@Inject(identifier) custom:any){
    console.log(custom) 
}
```
|Argument|Description|
|------|------|
|identifier|This will inject a provider.


<!--  -->
<br/>


## @History
**Type**
```Param Decorator```

**Description**

Injects the history object. This is used to navigate to new routes.

### Usage

```typescript
// /user?username=paul
@View("/user",Page)
method(@History() history){
    history.push("/new/route")
}
```





