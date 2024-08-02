import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  constructor(){
    window.scrollTo(0,0)
  }
  activeAnimation: boolean = false;
  topAndBottomAnimate: boolean = false;
  topAndBottomAnimateForsm: boolean = false;
  ngOnInit() {
    window.onscroll = () => {
      if (scrollY >= 250) {
        this.activeAnimation = true;
      } else {
        this.activeAnimation = false;
      }
      if (scrollY >= 1000) {
        this.topAndBottomAnimate = true;
      } else {
        this.topAndBottomAnimate = false;
      }
      if (scrollY >= 600) {
        this.topAndBottomAnimateForsm = true;
      } else {
        this.topAndBottomAnimateForsm = false;
      }
    };
  }
}
