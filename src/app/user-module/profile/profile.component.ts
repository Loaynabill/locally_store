import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { User } from '../../models/user';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  profileDeatiles:User={id:0,userName:"",email:"Ss",password:"A",type:0,phone:""}
  id:number=0;
  constructor(private api:SupabaseService,private routerlink:ActivatedRoute,private serprofile:ProfileService){
    this.id = Number(this.routerlink.snapshot.paramMap.get('id'));
    this.getDeatils();

  }

  ngOnInit() {
    this.getDeatils();
  }

  getDeatils(){
   this.api.getProfileDeatiles(this.id).subscribe((res)=>{

  this.profileDeatiles=res[0]
  this.serprofile.Deatiles=this.profileDeatiles
   })
  }

  // getDeatils(){
  // {
 
   
  //  this.profileDeatiles=JSON.parse(localStorage.getItem('user')!)
  //  console.log(this.profileDeatiles);
   
  //  }
  // }

logout(){
  localStorage.removeItem('user')
}
}
