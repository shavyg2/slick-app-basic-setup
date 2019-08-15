# Getting Started



## Overview

<div class="flex flex-row">
    <img src="/image/src-view.png" alt="project structure"/>
</div>

## Project Overview
These are suggestions, rather than rules. The framework has absolutely no dependency on the file system and won't hinder your requirements, 
creativity, OCD or feng shui, however this wheel has been invented many times, and it's good to have a stance. Follow familiar backend 
application structure, while keeping features together has been a fan favorite, however your the boss. .

## Project Structure
- Controller - is where all of your ui routing logic will be placed.
- Controller/layout - place all general layouts here
- Controller/UserController.ts - create top level controllers that share the same layout.
- Services - Will store all of the providers that you want to have injected.
- Template.svelte - Main template handles things such as layout and view props
- 404.svelte - Use this template to design your 404 pages
- Error.svelte - Use this template to display errors that occur on the page
- Loading.svelte - A fallback to show if page transitions take a long time. Use a spinner or something to show the user it's working
- main.ts - This is where the application gets bootstrapped and all wired up.



## Main.ts

```typescript
import { Module, SlickForSvelteFactory } from "@slick-for/svelte";
import { createBrowserHistory } from "history";


import { DocController } from "./controller/DocController";

import Template from "./Template.svelte";
import Error404 from "./404.svelte";
import ErrorPage from "./Error.svelte";


import { Introduction } from "./services/lang/introduction";
import { GettingStarted } from "./services/lang/GettingStarted";
import { TemplatingLang } from "./services/lang/templating";


import { Menu } from "./services/lang/menu";
import { SideMenu } from "./services/lang/side-menu";

const history = createBrowserHistory();
@Module({
  controllers: [DocController],
  provider: [
    Introduction,
    Menu,
    SideMenu,
    GettingStarted,
    TemplatingLang
  ]
})
export class ApplicationModule {}

const app = SlickForSvelteFactory.create(ApplicationModule, {
  base: Template, 
  history, //https://www.npmjs.com/package/history
  component404: Error404, //svelte 404 Page, make it up or copy from somewhere else,
  error: ErrorPage,
  target: document.body //Where to render to https://svelte.dev/docs#Creating_a_component
});


app.Initialize();
```


## Getting Started

The main.ts file is the main entry point. This is an example of the classes used to start this documentation website. 
Let's get one thing straight. You can delete everything and adjust for imports, and everything will be just fine. 
There is no magic, just smarts.

All controllers and services must be added to the module. 
Controllers are added in the module decorator under the key controllers and services under the key provider.

The providers are factories, values, and classes. They are injected into the controllers/ other providers where needed, for easy composition. One trick you can do is move the array of controllers and providers, to a different file and then import them. This is useful when you are testing.

See the doc on Booting an Application for more information on starting the application.

## Controller
Controllers are very simple. They do one thing they control the ui layout. This includes the layout and the view.

This is where you might want to gather dependencies that you will need throughout your application. This can be passed to the constructor to be automatically injected.


## View
One of the issues with single page applications is where should data be gathered? It becomes a mess when the structure is left to the developer to choose where to gather data.

We are missing controllers to control the flow of data. Server side applications have a stage where we are able to fetch data. This IO layer is critical to maintaining simple and clear design.