# Fast Track

## For Experienced Programmers

Slick doesn't take long once you want you get head around it.
We are going to discuss some high level understanding and 
then get straight to the point. If you have used node and 
other bundling libraries such as webpack and have done front-end 
development before then fast tracking is the simplest way to gain 
an understanding of how this framework works.

This guide will be mainly copy and pasting but if you follow it, you should have a pretty keen
understanding of how everything works.


## Getting the Project


```npx degit shavyg2/slick-app-basic-setup```

after this is downloaded run ```npm install``` or ```yarn```.

Open the project into your favourite Text Editor and we will begin with some 
small changes.


## Pseudo Code

If you thought high level of rendering a view it would look something like this.
```typescript
function GetUserPage(){
    const data = getData();
    return data;
}

```

```html
<script>
    export let data;
</script>

<div>
    <div>
        <img src={data.avatar_url} alt="user avatar"/>
    </div>

    <div>{data.login}</div>
</div>
```
This data would some how need to get to the view used above. Let's start the needed work
to accomplish this.


Copy the code of the view and place it here ```src/controller/user/user-page.svelte```.



## Fill In the Blanks

So let's now begin to fill in the blanks. The GetUserPage function would have no idea of how
to connect to the view. Let's fill that out and make it a little bit more usable.

Let's place it into a class. Now that it's in a class we will be able to share things across 
different views. Also let's make it async because this data is likely on a server far away.



```typescript

export class UserController{

    async GetUserPage(){
        const data = await getData();

        return data;
    }
}
```

So somehow we need to connect it to the view.
Let's do this by importing the Svelte Component we created earlier.
We will also import the ```@View``` decorator so that the method can be 
informed of the view.

```typescript
    import {View} from "@slick-for/svelte"
    import UserPage from "./user/user-page.svelte";


    export class UserController{


    @View(UserPage)    
    async GetUserPage(){
        const data = await getData();

        return data;
    }
}
```

Okay that is a bit better but we still don't know how to get to that view,
we likely want to get to that view using a url. So let's give it one.



```typescript
    import {View} from "@slick-for/svelte"
    import UserPage from "./user/user-page.svelte";


    export class UserController{


    @View("/username",UserPage)    
    async GetUserPage(){
        const data = await getData();

        return data;
    }
}
```


So it doesn't really make a lot of sense to be using ```/username``` as this
user could be any user so let's make this a parameter by changing it to this.
```/:username```



```typescript
    import {View} from "@slick-for/svelte"
    import UserPage from "./user/user-page.svelte";


    class UserController{


    @View("/:username",UserPage)    
    async GetUserPage(){
        const data = await getData();

        return data;
    }
}
```

We still don't have a way to reuse this controller or to navigate to it so we 
need to add something so that the framework knows that it's a controller and 
we need to give it a path so that we can navigate to it. 

We are going to import the ```Controller``` decorator and use it on the class
Let's also give this controller a path.


```typescript
    import {Controller,View} from "@slick-for/svelte"
    import UserPage from "./user/user-page.svelte";

    @Controller("/user")
    class UserController{


    @View("/:username",UserPage)    
    async GetUserPage(){
        const data = await getData();

        return data;
    }
}
```


Ok this is pretty good. We know the url we are going to navigate to, but we don't have 
a way to get the data of that specific user. We need to somehow get access to that parameter.


Let's use the ```Param``` decorator, to easily access the parameter that was passed 
to the url.

```typescript
import { Controller, View, Param } from "@slick-for/svelte";
import UserPage from "./user/user-page.svelte";
import { GithubApi } from "../services/github-api";


@Controller("/user", {})
export class UserController {


  @View("/:username", UserPage)
  async GetUserPage(@Param("username") username: string, api: GithubApi) {
    const data = await api.getUserByName(username);
    return data;
  }
}


```

## Making it real

Great we have our username, we are getting the required data, but its time to make
this app real. We are going to create a service that will help us get that data. Copy and paste
the code from below into ```src/services/github-api.ts```. You can look at the detail but it doesn't really
matter. This is just an example. It will be getting the username from GitHub.


```typescript
import {
  Injectable
} from "@slick-for/svelte";

@Injectable()
export class GithubApi {
  private apiUrl = "https://api.github.com";

  async getUserByName(username: string) {
    let res = await fetch(`${this.apiUrl}/users/${username}`);
    let users = await this.isGood(res);
    return users;
  }

  private async isGood(res: Response) {
    if (res.status - 299 > 0) {
      let text = await res.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        throw text;
      }

      throw parsed;
    } else {
      return res.json();
    }
  }
}

```



## Using our service

Now that we have our service we are going to replace that ```getData``` function and use 
the service and it's method.

```typescript
    import {Controller,View,Param} from "@slick-for/svelte";
    import UserPage from "./user/user-page.svelte";


    @Controller("/user")
    class User{

    @View("/:username",UserPage)    
    async GetUserPage(@Param('username') username:string,api:GithubApi){
        
        const data = await api.getUserByName(username);
        return data;

    }
}

```


Dependency Injection will take care of how we get that class we don't need to worry 
about it for now. We changed ```getData``` and called the required method.


## Finalizing

We now have a complete controller, view and service but we need to let
the framework be aware of them. We are going to add it to the ```src/main.ts``` file.

Ensure that the controller is placed in the correct place and the provider
is also placed in the correct place.




```typescript
@Module({
  controllers: [MainController,UserController, DocController],
  provider: [
    GithubApi,
    Introduction,
    Menu,
    SideMenu,
    GettingStarted,
    TemplatingLang,
    ControllerLang,
    MarkdownLoader,
    Markdown,
    ...TestProviders
  ]
})
export class ApplicationModule {

  
}

```


## Boot
Let's start the application. Go to your terminal and run. ```yarn run dev```
This is going to boot up webpack dev server.

Navigate to ```/user/shavyg2``` or your own username if you so choose.

You should see something like this.

<img src="/image/documentation/example-user.png" />

# JSON Format Feature



## Update View
Let's go back to our view and add a new feature, perhaps you wanna to see the json that
was returned and not just the the page.

Let's implement this url ```/user/shavyg2?fmt=json```. We are going to need to update our view.
Copy and paste the code from below and update ```user-page.svelte```.

```html
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

```

## Update Controller

Let's fix our controller to add this new feature. Let's use the ```Query``` decorator
so we can easily get access to the data that is inside of the query string.

```typescript
import { Controller, View, Param } from "@slick-for/svelte";
import UserPage from "./user/user-page.svelte";
import { GithubApi } from "../services/github-api";
import { Query } from "@slick-for/svelte";

@Controller("/user")
export class UserController {
  @View("/:username", UserPage)
  async GetUserPage(@Param("username") username: string, api: GithubApi, @Query("fmt") format) {
    const data = await api.getUserByName(username);
    return {
      data,
      json:format==="json"
    };
  }
}


```



Now go back to your browser and enter the url ```/user/shavyg2?fmt=json``` or your username.
You should see something similar to this.

<img src="/image/documentation/example-user-json.png">



# Recap

We now know how to setup a controller, providers, view and get access to data that 
is inside the url. There are more features to this framework but this should get you 
a general idea. The rest of it is all svelte, creating links.

Refer to the source code of the documentation to get some more ideas of what is possible 
as the Documentation for the Project is fleshed out.