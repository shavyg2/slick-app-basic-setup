import { Controller, View,History } from "@slick-for/svelte";



@Controller("/")
export class MainController{

    @View("/",null as any)
    redirect(@History() history){
        history.push("/svelte/docs")
    }
}