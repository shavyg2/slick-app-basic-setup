import marked from "marked";
import { Injectable } from "@slick-for/svelte";



@Injectable()
export class MarkdownLoader{
    async load(path:string){
        const res = await fetch(path)
        if(res.status!==200){
            throw new Error(`Failed to fetch markdown ${path}`)
        }
        let text = await res.text()

        return text;
    }
}




@Injectable()
export class Markdown{
    constructor(private loader:MarkdownLoader){}

    async getHTML(path:string){
        let markdownPath = `/markdown${path}.md`

        let markdown = await this.loader.load(markdownPath);

        let html = marked(markdown,{
            gfm:true
        });

        return html;
    }
}