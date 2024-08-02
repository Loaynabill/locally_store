import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { Message } from '../../models/message';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  logoanime:boolean=false
  constructor(private api:SupabaseService){}
  ngOnInit() {
    window.scrollTo(0,0)
    window.onscroll=()=>{
      if (scrollY >= 500) {
        this.logoanime=true
      }else{
        this.logoanime=false
      }
    }
  }

  sendmsg(data:Message){
    this.api.insertMessage(data).subscribe((res=>{
     console.log(res);
     Swal.fire('Your message has been sent successfully');
    }));
}

}
