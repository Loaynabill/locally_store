import { Amount } from "./amount";

export interface Product {
    id:number,
    title:string,
    price:number,
    images:string[],
    categoryid:number,
    genderid:number,
    amount:Amount
}

