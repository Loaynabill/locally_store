import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';
import { SupabaseService } from '../../service/supabase.service';
import { Amount } from '../../models/amount';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
constructor(private api:SupabaseService){
  window.scrollTo(0,0)
}

addprdd(value:any,form:NgForm){

let amount=JSON.parse(value.amount) 
let title=value.title;
let price=value.price;
let categoryid=value.categoryid;
let genderid=value.genderid;
let images=JSON.parse(value.images)
let prd:any={title,price,categoryid,genderid,images,amount}


this.api.addproduct(prd).subscribe((res)=>{
  console.log(res);
  
})
Swal.fire({
  title: 'Success!',
  text: 'produect added successfully',
  icon: 'success',
  confirmButtonText: 'OK',
});

form.reset()

}


}
