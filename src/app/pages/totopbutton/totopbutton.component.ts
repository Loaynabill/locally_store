import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totopbutton',
  templateUrl: './totopbutton.component.html',
  styleUrl: './totopbutton.component.css'
})
export class TotopbuttonComponent {
  hide:boolean=false;

  


  goToTop(){
    window.scroll({
      top:0,
     left:0,
     behavior:'smooth'
    })
  }

}
