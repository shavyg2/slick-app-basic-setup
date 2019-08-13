import { Injectable } from "@slick-for/svelte";

import faker from "faker";
import { fmtParagraph } from "../../util/format-paragraph";


@Injectable()
export class GettingStarted{
    title="Getting Started"


    overview_sub="Project Overview"
    overview_content = fmtParagraph(`
Controller - is where all of your ui routing logic will be placed.

Controller/layout - place all general layouts here

Controller/UserController.ts - create top level controllers that share the same layout.

Services - Will store all of the classes that you want to have injected.

Template.svelte - Main template handles things such as layout and view props

404.svelte - Use this template to design your 404 pages

Error.svelte - Use this template to display errors that occur on the page

Loading.svelte - A fallback to show if page transitions take a long time. 
Use a spinner or something to show the user it's working


main.ts - This is where the application gets bootstrapped and all wired up.
    `)



    main_sub="Main.ts"
    main_content=fmtParagraph(`
The main.ts file is what start everything in motion. This is an example of the classes used to start this documentation
website.

All controllers and services must be added to the module.
Controllers are added in the module decorator under the key controllers and services under the key provider.


The providers are factories, values, and classes. They are injected into the controllers/ other providers
where needed, for easy composition.
One trick you can do is move the array of controllers and providers, to a different file and then import them. 
This is useful when you are testing.


See the doc on Booting an Application for more information on starting the application.
    `)

    controller_sub="Controller"
    controller_content = `
 Controllers are very simple. They do one thing they control the ui layout. 
 This includes the layout and the view.


 This is where you might want to gather dependencies that you will need throughout your application.
 This can be passed to the constructor to be automatically injected.
`.trim().split(/\r?\n{2,}/g)



    view_sub="View"
    view_content = fmtParagraph(`
    
One of the issues with single page applications is where should data be gathered?
It becomes a mess when the structure is left to the developer to choose where to gather data.

We are missing controllers to control the flow of data. Server side applications
have a stage where we are able to fetch data. This IO layer is critical to maintaining simple and clear design.

`);

    template_sub="Template"
    template_content = [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
    ];

    sub4="404 Not found"


    sub5="Modules"
}