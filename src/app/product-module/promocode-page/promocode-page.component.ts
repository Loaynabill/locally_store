import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { Promocode } from '../../models/promocode';

@Component({
  selector: 'app-promocode-page',
  templateUrl: './promocode-page.component.html',
  styleUrl: './promocode-page.component.css'
})
export class PromocodePageComponent implements OnInit {
  promocodeList:Promocode[]=[];
  constructor (private api:SupabaseService){
    window.scrollTo(0,0)
  }

  ngOnInit(){
  this.getAllPromocode();
  }
 
  
  getAllPromocode(){
    this.api.getAllPromocode().subscribe((res)=>{
      this.promocodeList=res
    })
  }

}
