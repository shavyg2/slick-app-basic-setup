


export function isHeading(content:string){
    let result = content.trim().match(/^\[[^]+\]$/)
    return result;
}

export function asHeading(content:string){
    return content.trim().substring(1,content.length-1);
}