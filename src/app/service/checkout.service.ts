import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductOrder } from '../models/product-order';
import { Promocode } from '../models/promocode';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  cart: ProductOrder[] = []
  promocodeList: Promocode[] = []
  totalprice: number = 0
  priceafterpromo:number=0
  constructor(private api: SupabaseService) { 
    this.getAllPromocode()
  }


  addPrdtoCart(prd: ProductOrder) {
    this.cart.push(prd)

  }

  removePrdfromCart(index: number) {
    this.cart.splice(index, 1)
  }

  totalpricee() {
    return this.totalprice = this.cart.reduce((sum, prd) => {
      return sum += prd.totalPrice;
    }, 0)
  }

  clearCart() {
    this.cart = []
  }

  getAllPromocode(){
    this.api.getAllPromocode().subscribe((res)=>{
      this.promocodeList=res
    })
  }

  applyPromocode(promo: string):number {
    for (let index = 0; index < this.promocodeList.length; index++) {
      if (promo.toLowerCase() == this.promocodeList[index].title) {
        this.priceafterpromo= this.totalprice-=  this.totalpricee()* (this.promocodeList[index].sale / 100)
      }
    }
    console.log(this.priceafterpromo);
    
    return this.priceafterpromo
  }

}
