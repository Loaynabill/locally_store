import { Component } from '@angular/core';
import { SucessorderService } from '../../service/sucessorder.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sucessorder',
  templateUrl: './sucessorder.component.html',
  styleUrl: './sucessorder.component.css'
})

export class SucessorderComponent {

  constructor(private prdList:SucessorderService){
    window.scrollTo(0,0)
  }


  getAllPrd(){
    
   return this.prdList= this.prdList.getAllPrd()
    
  }

}
