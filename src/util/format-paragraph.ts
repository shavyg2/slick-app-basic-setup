


export function fmtParagraph(text:string){
    return text.trim().split(/(\r?\n){2,}/g).filter(x=>x.trim())
}