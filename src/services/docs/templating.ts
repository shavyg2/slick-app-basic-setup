import { Injectable } from "@slick-for/svelte";
import { fmtParagraph } from "../../util/format-paragraph";



@Injectable()
export class TemplatingLang{
    title="Templating";

    p1 = fmtParagraph(`
    
Templating follows the excellent templating of svelte and you can refer to their
documentation. Everything you learn there can be extended upon to add value while 
using this framework.
    `)



    standard_content = fmtParagraph(`
This is an example of the base template that you can use.
However, you will likely customize it at a later stage. This is just to get you started.
You may not need to customize your template. Try using a layout first.
    `)



    error_content = fmtParagraph(`
This is a basic error template. It takes an error that is thrown and has access to the message
and the stack for the error. You can display and omit to your choosing.
    
    `)



    notfound_content= fmtParagraph(`
This is an example of a 404 page. It's very simple and this is something
you can customize.
    
    `)
}