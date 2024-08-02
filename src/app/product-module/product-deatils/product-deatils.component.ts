import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '../../service/checkout.service';
import Swal from 'sweetalert2';
import { FormControl, NgForm } from '@angular/forms';
import { Review } from '../../models/review';
import { Observable, Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.css',
})
export class ProductDeatilsComponent implements OnInit {
  maxlimit: number = 0;
  currentRate:number=0
  starlist:number[]=[]
  checkeddiv: boolean = false;
  according: boolean = true;
  review: boolean = false;
  reviewlist:Review[]=[]
  sizeChart:Boolean=false
  prd: Product = {
    id: 0,
    title: 'string',
    price: 0,
    images: [''],
    categoryid: 0,
    genderid: 0,
    amount: {
      s: 0,
      m: 0,
      l: 0,
      xl: 0,
    },
  };

  productId: number = 0;
  constructor(
    private api: SupabaseService,
    private routerAtive: ActivatedRoute,
    private order: CheckoutService,
    private location:Location,
    private cart:CheckoutService
  ) {
    window.scrollTo(0,0)
    this.productId = Number(this.routerAtive.snapshot.paramMap.get('id'));
  }


  ngOnInit() {
    this.getProductById();

    this.getreview()
  }

  getProductById() {
    this.api.getProductById(this.productId).subscribe((res) => {
      this.prd = res[0];
      console.log(this.prd);
      
    });
  }

  sizefun(size: string) {
    switch (size) {
      case 's':
        this.maxlimit = this.prd.amount.s;

        break;
      case 'm':
        this.maxlimit = this.prd.amount.m;

        break;
      case 'l':
        this.maxlimit = this.prd.amount.l;

        break;
      case 'xl':
        this.maxlimit = this.prd.amount.xl;
        break;
    }
  }

  onsumbit(
    product: Product,
    size: string,
    quantityOfUser: number,
    form: NgForm
  ) {
    let amount: number = 0;
    let productSizeCombare:string=''
    switch (size) {
      case 's':
        amount = product.amount.s;
        productSizeCombare='s'
        break;
      case 'm':
        amount = product.amount.m;
         productSizeCombare='m'
        break;
      case 'l':
        amount = product.amount.l;
         productSizeCombare='l'
        break;
      case 'xl':
        amount = product.amount.xl;
         productSizeCombare='xl'
        break;
    }

    if (this.cart.cart.length>0) {
      let list=this.cart.cart.filter((prdd)=>{
        return prdd.size==productSizeCombare
      })
     let compareNum =list.reduce((compare,prdd)=>(compare += prdd.quantityOfUser),0)
     if (amount >= compareNum + quantityOfUser) {
      let totalPrice = quantityOfUser * product.price;
      let prdafterorder = { product, quantityOfUser, size, totalPrice };
      this.order.addPrdtoCart(prdafterorder);
      Swal.fire({
        title: 'Success!',
        text: 'product added to cart',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      form.reset();
  
     } else {
      Swal.fire('the quantity is bigger than stock');
     } 
    } else {
      if (amount >= quantityOfUser) {
      let totalPrice = quantityOfUser * product.price;
      let prdafterorder = { product, quantityOfUser, size, totalPrice };
      this.order.addPrdtoCart(prdafterorder);
      Swal.fire({
        title: 'Success!',
        text: 'product added to cart',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      form.reset();
    }
      Swal.fire({
        title: 'Success!',
        text: 'product added to cart',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }

    // if (amount >= quantityOfUser) {
    //   let totalPrice = quantityOfUser * product.price;
    //   let prdafterorder = { product, quantityOfUser, size, totalPrice };
    //   this.order.addPrdtoCart(prdafterorder);
    //   Swal.fire({
    //     title: 'Success!',
    //     text: 'product added to cart',
    //     icon: 'success',
    //     confirmButtonText: 'OK',
    //   });
    //   form.reset();
    // }
  }

  showaccoring() {
    this.according = false;
    this.review = false;
    this.sizeChart=false
  }

  showRewiew() {
    this.review = true;
    this.according = true;
    this.sizeChart=false
  }

  sendreview(review:Review,prdid:number,formreviwies:NgForm,rate:number){
this.api.postreview(review,prdid,rate).subscribe((res)=>{
})
formreviwies.reset()

  }

  getreview(){
   this.api.getreview(this.productId).subscribe((res)=>{
    this.reviewlist=res;
    
    })
    this.getreview()
  }

  changeRating(rate:number){
  console.log(rate);
  
}

showSizeChart(){
this.sizeChart=true
this.review = false;
    this.according = true;
}

goBack(){
  this.location.back()
}

}
