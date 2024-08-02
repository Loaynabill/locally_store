import { Aderess } from "./aderess";
import { ProductOrder } from "./product-order";

export interface FormOrder {
    firstname:string,
    lastname:string,
    email:string,
    phone:string,
    adderess:Aderess,
    productlist:ProductOrder[]
    finaltotalprice:number
}
