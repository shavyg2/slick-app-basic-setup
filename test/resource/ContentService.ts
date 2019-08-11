
import {IContent} from "./interface/iContent";
import faker from "faker";
export class ContentService{



    async getContent():Promise<IContent[]>{

        let contentInformation:IContent[] = [];
        let content:IContent;
        for(let i=0;i<10;i++){
            content = {
                title:faker.commerce.product(),
                description:faker.lorem.paragraph()
            }

            contentInformation.push(content);
        }

        let RealContent:IContent[] = [
            {
                title:"Param",
                display:"@Param",
                description:`
This is used to gather parameters, from a url string
`.trim()
            }
        ]

        return [
            ...RealContent,
            ...contentInformation
        ];
    }
}