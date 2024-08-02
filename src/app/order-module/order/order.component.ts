import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { CheckoutService } from '../../service/checkout.service';
import { FormOrder } from '../../models/form-order';
import { ProductOrder } from '../../models/product-order';
import { SupabaseService } from '../../service/supabase.service';
import { SucessorderService } from '../../service/sucessorder.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  orderForm: FormGroup;
  priceAfterSale:number=0
  hideTotalprice:boolean=false
  cartList:ProductOrder[]=[]
  constructor(private cart:CheckoutService,private api:SupabaseService,private sucessOrder:SucessorderService) {
    window.scrollTo(0,0)
    this.orderForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z]+$'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z]+$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),
      ]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^01[0-2]{1}[0-9]{8}$')]),
      adderess: new FormGroup({
        country: new FormControl('egypt', [
          Validators.required,
          Validators.pattern('^[a-z]+$'),
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z]+$'),
        ]),
        street: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ]),
        unit: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ]),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{5}$'),
        ]),
      }),
      
    });
  }

  getAllprd(){
    this.cartList=this.cart.cart
    return this.cart.cart
  }

  getTotalPrice(){
    return this.cart.totalpricee();
  }

  applyPromocode(promo:string){ 
   this.priceAfterSale=this.cart.applyPromocode(promo);
   if (this.priceAfterSale!=0) {
    this.hideTotalprice=true
   } else {
    this.hideTotalprice=false
   }
  }

  orderNow(Form:any,order:FormGroup){  
    let finaltotalprice=this.cart.totalpricee()
    if (this.priceAfterSale==0) {
     finaltotalprice=this.cart.totalpricee()
    } else {
      finaltotalprice=this.priceAfterSale
    }
    let productlist=this.cart.cart
    let orderForm:FormOrder  
    ={...Form,productlist,finaltotalprice}
    let date = new Date()
    let susessor={productlist,finaltotalprice,date}
    
    this.sucessOrder.susess.push(susessor)
this.cart.cart.map((prd)=>{
  this.api.updateOnProduct(prd,prd.quantityOfUser,prd.size).subscribe((res)=>{
 })
})
this.api.postOrder(orderForm).subscribe((res)=>{
})


localStorage.clear()
if (localStorage.length==0) {
  localStorage.setItem("orderr",JSON.stringify([susessor]))
} else {
  let listOrder=[...JSON.parse(localStorage.getItem("orderr")!),[susessor]]
  console.log(listOrder);
  
  localStorage.setItem("orderr",JSON.stringify(listOrder))
}
this.cart.clearCart()
this.priceAfterSale=0
order.reset()
Swal.fire({
  title: 'Success!',
  text: 'order is completed',
  icon: 'success',
  confirmButtonText: 'OK',
});

}

  
}
