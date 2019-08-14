import { Injectable } from "@slick-for/svelte";
import faker from "faker";
import { subscribe } from "svelte/internal";
import { fmtParagraph } from "../../util/format-paragraph";
@Injectable({
    scope:"Singleton"
})
export class Introduction{

    title = "Intro to Slick for Svelte";

    sub1="Why Choose Slick?";
    p1=fmtParagraph(`

[Why Choose Slick?]

Svelte, is amazingly simple, fast and small. It has mastered component state management, 
but there are a couple of areas where the framework offers little to no support.

Slick adds support for building scalable frontend applications using Svelte.
Out the Box Routing, Dependency Injection, data flow, state management and many features. 
View data can be received upfront, similar to how it's handled in server rendered applications,
with easy loading component view if desired.

Slick supports async workflows and manages resolving async data if needed. 
The framework removes tons of boilerplate code so you can focus on getting the project completed.
Simple things such as suspense between page transition are trivial. Welcome to Slick.
`)
    
    p2=fmtParagraph(`

[Architecture]

Slick focuses expressing intent, rather than coordinating and designing the system.
Immediate empowerment is felt as the framework allows you to write features, not boilerplate setup code.
These come with very little trade off, you will feel in control the entire time.
Below is a list of things to expect from the framework.
    `)

    dependency = [
        "Routing",
        "Easy data flow and state management",
        "IOC",
        "Async is as easy as sync",
        "Readable, Maintainable, Flexible",
        "Familiar",
        "Documentation (in progress)",
        "Code Splitting Heaven (We are never talking about bundle size again, ever)."
    ]


    p3=fmtParagraph(`
Slick seperates requirements into logical areas for easy code readability and maintainance.
Requirements such as view, viewdata, routing are placed intelligently and works togather in harmony
to create a productive development experience. We are very confident you will like it.

Slick follows some strict philosophy in it's approach, make it readable, make it maintainable,
make it boilerplateless support async and most importantly, get out of the developers way.


[Typescript]


While it is technically possible to use Slick without Typescript, this defeats the purpose
of it's ease of development. Slick takes a stance similar to Angular. The developer experience
shouldn't be sacrificed. Even if you are not a fan of Typescript, with typescript being a super
set of javascript you can write complete 'typescript-less' typescript and gain the same 
benefits. Appart from writing a .ts extention instead of .js, you will notice no absolutely difference
from a regular svelte application (Not true, intellisense and code completion will work better).


[Developer Story]

The experience with Slick aims to be a love story, a real Romeo and Juliette story.
Placing the developer first, is truely something that can't be taken for granted.
Svelte has placed the developer first while, never losing sight of the importance
of the user experience. Slick loves you and you will really feel it while using 
the framework. Welcome to Slick.

`);
    sub3="Getting Started";
    

}