import { Timestamp } from "rxjs";

export interface Review {
    prdid:number,
    username:string,
    email:string,
    userreview:string,
    created_at:string,
    rating:number[]
}
