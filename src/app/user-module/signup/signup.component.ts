import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userlist:User[]=[]
  deafultList:User[]=[]
  userEmail:boolean=false
constructor(private api:SupabaseService,private router:Router){
  this.getAllUser()

}

getAllUser(){
  this.api.signUp().subscribe((res)=>{
    this.userlist=[...res]
    this.deafultList=[...res]
      })
    }


    checkUser(email:string){
    
      this.userlist=[...this.deafultList]
      this.userlist= this.userlist.filter((user)=>{
        return user.email==email
      })
      
      if (this.userlist.length==0) {
       this.userEmail=false
        
      } else {
        this.userEmail=true
      }  
    }

addUser(email:string,password:string,userName:string,phone:String){
  let user:any={userName,email,password,phone}

  this.api.addUser(user).subscribe((res)=>{
    Swal.fire({
      title: 'Success!',
      text: 'your account is created successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  })

  this.router.navigate(['/login'])
  
 
}

}
