import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../service/checkout.service';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cancel:boolean=false
  showdiv:boolean=false
  profileID:number=1
constructor(private cart:CheckoutService,private profile:ProfileService) {

}

  ngOnInit() {
    this.getAllCart();
this.determineIdProfile()
  }

  getAllCart(){
    return this.cart.cart
  }

  cancelcart(){
this.cancel=true

  }

  showCart(){
    this.cancel=false
    this.showdiv=true
  }

  removeprd(index:number){
this.cart.removePrdfromCart(index)
  }

  totalprice(){
    return this.cart.totalpricee()
  }

  clearCart(){
    this.cart.clearCart()
  }
  determineIdProfile(){
    this.profileID=this.profile.idProfile
  }
}
