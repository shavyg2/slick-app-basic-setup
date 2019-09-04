
<img src="/image/documentation/logo.png"/>

# Intro to Slick for Svelte
## Why Choose Slick?

Svelte, is amazingly simple, fast and small. It has mastered component view and state management, 
but there are a couple of areas where the framework offers little to no support.

Slick adds out the **Box Routing, Dependency Injection, data flow, state management and many features**. 
View data can be received sync or async  and offer a similar render pattern as server side rendered applications

```typescript

@Controller("/user/")
export class UserController {
  
  @View("/home", HomePage)
  async homepage(userapi: GithubApi, @Query("page") page = 1) {
    let users = await userapi.getPage(page);

    return {
      users: users
    };
  }

  
  
  @View("/:username", UserPage)
  async getUserPage(api: GithubApi, @Param("username") username: string) {
    let user = await api.getUserByName(username);
    return {
      user
    };
  }

}
```


## Architecture

The framework removes tons of boilerplate code so you can focus on getting the project completed. 
You will be **writing application features not glue**. Focusing on expressing intent, rather than coordinating and designing the system. 
These come with very little trade off, you will feel in control 
the entire time. Below is a list of things to expect from the framework.

- Routing
- Easy data flow and state management
- IOC
- Async is as easy as sync
- Readable, Maintainable, Flexible
- Familiar
- Documentation (in progress)
- Code Splitting Heaven (We are never talking about bundle size again, ever).



## Typescript
The power of typescript will guide most of your logic and allow for some really amazing developer experience.

## Developer Story
The experience with Slick aims to be a love story, a real Romeo and Juliette story. Placing the developer first,
is truly something that can't be taken for granted. Svelte has placed the developer first while, never losing sight of the importance of the user experience.
Welcome to Slick.

## Getting Started
You can get started by cloning this [repo](https://github.com/shavyg2/slick-app-basic-setup). The documentation is built with
 slick. You can go through a
 [guided walk through](/svelte/docs/getting-started)
 or clone the
 repository.