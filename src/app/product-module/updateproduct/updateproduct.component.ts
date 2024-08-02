import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { SupabaseService } from '../../service/supabase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent implements OnInit {
  productId:number=0;
  amountt:any="";
  imagess:any="";
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
  constructor(
    private api: SupabaseService,
    private routerAtive: ActivatedRoute,
  ) {
    this.productId = Number(this.routerAtive.snapshot.paramMap.get('id'));
    window.scrollTo(0,0)
    
  }
  ngOnInit() {
    this.getProductById()
  }


  getProductById() {
    this.api.getProductById(this.productId).subscribe((res) => {
      this.prd = res[0];
      this.amountt=JSON.stringify(this.prd.amount)
      this.imagess=JSON.stringify(this.prd.images)
      
      
    });
}

updatee(prdvalue:any){
let amount=JSON.parse(prdvalue.amount) 
let title=prdvalue.title;
let price=prdvalue.price;
let categoryid=prdvalue.categoryid;
let genderid=prdvalue.genderid;
let images=JSON.parse(prdvalue.images)
let id=this.productId
let prd:Product={title,price,categoryid,genderid,images,amount,id}
  console.log(prdvalue);
  
this.api.updateprd(prd).subscribe((res)=>{
  console.log(res);
})
}
}
