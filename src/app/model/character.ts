
export interface Character{
    id:number,
    name:String,
    status:string
    species:string,
    type:string,
    gender:string,
    origin:CharacterOrigin,
    location:CharacterLocation,
    image:string,
    episode:string[],
    url:string,
    created:Date
}


export interface CharacterOrigin{
    name:string,
    url:string
}

export interface CharacterLocation{
    name:string,
    url:string
}
