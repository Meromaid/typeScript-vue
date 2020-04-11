 interface Person {
    id:number
    name:string
    age:number
}

interface IStoreState{
    home:object[],
    bLoading:boolean,
    isLoading:boolean
}
export {Person,IStoreState}