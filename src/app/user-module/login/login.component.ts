import { Component } from '@angular/core';
import { User } from '../../models/user';
import { SupabaseService } from '../../service/supabase.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userlist:User[]=[]
  constructor(private api:SupabaseService,private router:Router,private profile:ProfileService){
    this.getUsers()
  }

  checkUser(userData:User){
this.userlist= this.userlist.filter((users)=>{
  return (users.email==userData.email) && (users.password==userData.password)
})

console.log(this.userlist);

if (this.userlist.length>0) {
  Swal.fire({
    title: 'Success!',
    text: 'login is sussesful',
    icon: 'success',
    customClass:{
      popup:".swAlert"
    },
    confirmButtonText: 'OK',
  });
  localStorage.removeItem('user')

  localStorage.setItem("user",JSON.stringify(this.userlist[0]))
  this.profile.idProfile=this.userlist[0].id

  this.router.navigate(["/Home"])
  
  
} else {
  Swal.fire({
    title: 'Error!',
    text: 'this email or password is wrong',
    icon: 'error',
    confirmButtonText: 'OK'
  });
} 
this.getUsers()
}


  getUsers(){
    this.api.signUp().subscribe((res)=>{
      this.userlist=res
    })
}
}
