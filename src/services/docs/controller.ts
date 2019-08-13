import { Injectable } from "@slick-for/svelte";
import { fmtParagraph } from "../../util/format-paragraph";



@Injectable()
export class ControllerLang{


    content = fmtParagraph(`
At 1.0 Notice here that we are importing the Dashboard View, 
we will be using that a later point in time to render the view.

2.0 This is where we mark the class as a controller. This does two things.
First, it allows the controller to be used and have it resolve it's dependencies.
Second, it allows us to label what route to use to get to this controller.

2.1 Here we are using url parameters. This allows the methods in the controller
to get to parameters that are sent via the url.


3.1 & 3.2 This is what it looks like to have services that are injected
into the page. Here we are injecting the UserRepo and the AuthService.
Theese can be any providers that are supplied to the provider key in the module.


4.1 This is a method that will create the view when we navigate to it. 
Notice that there is a @View Decorator, This works similar to the controller
and allows a user to create a method that will be used to create a view.
Methods can inject instance (async / sync) just like the controller.

We are using special providers however that are provided
from by the framework. @Param will automatically give you the param object 
which is a parsed object from the current url. If a string is passed it will 
get the key from the parsed param object. In this example it will get the 
username that was passed from the url.

4.1 - 4.5 Here we are doing some really neat operations. Let's take a look
at how the framework helps bring this all together.

First important information is the param username that was briefly discussed.
Instead of doing any complex operation to get the parameter from the url we simply
just ask the framework to provide the username. You never need to worry that this 
won't exist, because if it didn't then it wouldn't have matched the route right?


Next we are using the auth instance that was previously introduced at 3.2, and 
what is amazing here is that it's an async method, The framework doesn't try to 
hold you back in any way. If you need to check something to make sure that 
the user is authenticated this is ok. If that something needs to be async, it's 
no issue. 

4.6 Here is where we use the token that was receieve from the username.
In our example some implementation gets a token for the user by calling a method
This token is then used by the userRepo to get the dashboard status,

The username and the dashboardStatus is now passed to the view which are just 
props that are passed to your svelte component.

There are 2 things to take away from this. First, you didn't have to wait 
for the promise to resolve. This was a choice you could have passed it as is to the 
view and have the view await the promise, if you have no need to show dummy 
view, or a loading view then you can just wait for it and render the view 
when it is ready.
`)
}