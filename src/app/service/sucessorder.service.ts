import { Injectable } from '@angular/core';
import { ProductOrder } from '../models/product-order';

@Injectable({
  providedIn: 'root'
})
export class SucessorderService {
sucessOrder:ProductOrder[]=[]
susess:any[]=[]
  constructor() { }

  getAllPrd(){
    return this.sucessOrder=JSON.parse(localStorage.getItem("orderr")!)
  }
 
}
