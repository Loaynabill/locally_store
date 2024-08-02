import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../../service/supabase.service';
import { Product } from '../../models/product';
import { User } from '../../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  genderid: number = 0;
  rowww:boolean=true
  gender: string = "";
  productlist: Product[] = [];
  deafultList: Product[] = [];
  sortList: Product[] = [];
  filterByCatList: Product[] = []
  user:User={   id:0,
    userName:"",
    email:"",
    password:"",
    type:0,
  phone:''}
    userType:boolean=false


  constructor(private activeRouter: ActivatedRoute, private api: SupabaseService) { 
    window.scrollTo(0,0)
 
  }
  ngOnInit() {
    this.activeRouter.paramMap.subscribe((res) => {
      this.genderid = Number(res.get("genderid"))
      if (this.genderid == 1) {
        this.gender = "Mens"
      } else {
        this.gender = "womens"
      }
      this.getAllproductByGebderId(this.genderid)})

      this.getTypeUser()
  }

  getAllproductByGebderId(id:number) {
    this.api.getAllproductByGender(id).subscribe((res) => {
      this.deafultList=res
      this.productlist = [...this.deafultList]
      this.filterByCatList=[...this.deafultList]
    })
  }

  
  deleteAll(){
    this.productlist=[]
    this.productlist.length=0
  }

  filterByCategory(catid:number) {     
    if (catid==0) {
     
    
    this.productlist=[...this.deafultList];
    this.filterByCatList=[...this.productlist]
    }else {
      this.filterByCatList=this.deafultList.filter((prd)=>{
        return  prd.categoryid==catid;
    })
    
    this.productlist=[...this.filterByCatList]
    }
  }

  filterBySort(sortId:number) { 
    
    if (sortId==0) {   
    this.productlist=[...this.filterByCatList];
    }if (sortId==3){
      this.productlist.sort((a, b) => a.price - b.price);
    }if (sortId==2){
      this.productlist.sort((a, b) => b.price - a.price);
    }
  }

  getTypeUser(){
 this.user=JSON.parse(localStorage.getItem("user")!)
 if (this.user.type==1) {
  this.userType=true;
  
 } else {
  this.userType=false;
 }
  }

  deleteprd(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "black",   
    
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "black",
        });
        this.api.deletProductById(id).subscribe((res)=>{

        })
      }
    });
  }


}
