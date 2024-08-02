import { Product } from "./product";

export interface ProductOrder {
    product:Product,
    quantityOfUser:number,
    size:string
    totalPrice:number
}
