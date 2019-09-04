import { Controller, View,History } from "@slick-for/svelte";
import Main from "./docs/blank.svelte"


@Controller("/")
export class MainController{

    @View("/",Main)
    redirect(@History() history){
        history.replace("/svelte/docs");
    }
}