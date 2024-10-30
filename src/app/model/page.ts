import { Character } from "./character"

export interface Page{
    info:PageInfo,
    results:Character[]
}

export interface PageInfo{
    count:number,
    pages: number,
    next:string | null,
    prev: string | null
}