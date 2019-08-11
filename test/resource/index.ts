import Container from "@slick-for/di";
import { WebsiteProvider } from "./website";
import { TestProviders } from "./TestProviders";


let Test = [
    ...TestProviders,
    WebsiteProvider
]

export const container = new Container();
try{
    Test.forEach(t=>{
        container.add(t);
    });
}catch(e){
    console.log(e);
    throw e;
}