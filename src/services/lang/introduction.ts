import { Injectable } from "@slick-for/svelte";
import faker from "faker";
import { subscribe } from "svelte/internal";
@Injectable({
    scope:"Singleton"
})
export class Introduction{

    title = "Intro to Slick for Svelte";



    sub1="Why Choose Slick?";
    p1=`
Svelte, is amazing. I believe the first time we tried it out we were taken aback by it's simpliesty. 
Svelte has mastered component state management and this is wonderful, but there are a couple of areas
where the framework offers little to no support.

Slick adds a little bit more support for building scalable frontend applications using Svelte.
Out the Box Routing, Dependency Injection, data flow and aid in state management. 
View data can be received upfront, similar to how it's handled on server side application, or promises
so you can add in your loading animation if you choose.

All dependency, async or sync can be configured for easy injection, with required dependencies.
Easy access to routes and router parameters,query string parameters.

This removes boiler plate setup and allows you to add in the code you need to get a project completed.
Simple things such as suspends between page transition are simple solutions. Welcome to Slick.
`.trim().split(/\n{2,}/g);
    
    sub2="Architeture";
    p2=`
Slick focuses on the control flow of your application above everything else. Below is a list of things
that are easily managed using slick for svelte.
    `.trim().split(/\n{2,}/g)


    dependency = [
        "Classes implementing Api and Services",
        "Helper classes and Factories",
        "URL parameters",
        "URL query string parameters",
        "Class state with stores"
    ]


    sub2_5=`
View logic is seperated out into the decorators, allowing for easy modification
of the application routes. Views are easily switched around allowing for each
development. Views also inherit the layout that is giving by the controller. This allows rapid development
within a single controller where things are grouped similarity.

Gathering data from the url is trivial with the Param options. This is used to inject dynamic
data to the application controller which then can use it to help product the view data. This can
be sync or unsync the framework will managed it.

Dependencies, can be sync, async, Singleton, Per Pageview, or individual instances created.


    `.trim().split(/\n{2,}/g)
    sub3="Getting Started";
    

}