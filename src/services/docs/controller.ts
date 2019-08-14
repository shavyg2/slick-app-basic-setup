import { Injectable } from "@slick-for/svelte";
import { fmtParagraph } from "../../util/format-paragraph";



@Injectable()
export class ControllerLang{


    intro = fmtParagraph(`
There are lots of things that can get done in a Controller. 
Below is an example controller which we will analyze and touch on some key concepts.
`
)

    detail = fmtParagraph(`

[Imports]

At 1.0 notice here that we are importing the Dashboard View, 
we will be using that at later point in time to render the view.


[Controller]

2.0 The class is marked as a controller. This does two things;
It allows the controller and it's dependencies to be resolved and it gives it an activation 
url.


2.1 Here we are using the url parameter :username, which allows the url 
to have placeholders that can be resolved within the @View method.


[Dependencies]

3.1 & 3.2 Dependecies are injected into the class instance. In this case 
UserRepo and AuthService are injected, these can be any providers that are supplied to the 
module.

[Method]

4.1 Upon navigating to this route defined with @View the class method is activated and dependencies are resolved. 
Async dependencies are resolved as well.

Slick has custom providers; here we see @Param and @History. 
@Param provides a param object with all of the parameters. 
Use the parameter label instead to retrieve a specific key for convenience.
In this example the 'username' label provides the username from the url.


[Putting it togather]

4.1 - 4.5 Let's take a look at how the framework helps simplify coordinating 
all the requirements to produce the require output.

It minimizes boilplate code required to get the data and gives a clear and clean
syntax. Instead of doing any complex operation to get the parameter from the url we simply
just ask the framework to provide the username. You never need to worry that this 
won't exist, because if it didn't then it wouldn't have matched.

Next, the auth instance previously introduced at 3.2, and the userRepo 
checks to make sure that the user is authenticated. 4.6 The token that was 
receieved is then used by the userRepo to get the dashboard status.

The username and the dashboardStatus are now available to the view, which are just 
regular props that are passed to your svelte component.

Let's reflect on this code to better understand some concepts. Understand that async is
welcomed and used freely. Here we choose to wait for it to resolve before sending it to
the view, however this is optional. You are free to pass the promise and show whatever layout
while it is resolving.
`)
}