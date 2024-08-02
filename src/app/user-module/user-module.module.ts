import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes=[{path:"",redirectTo:"/login",pathMatch:'full', title:"LOGIN-LOCALLY"},
  {path:"login", component:LoginComponent,title:"LOGIN-LOCALLY"},
  {path:'signup',component:SignupComponent,title:"SIGN UP-LOCALLY"},
  {path:'profile/:id',component:ProfileComponent,title:"PROFILE"}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  
  ]
})
export class UserModuleModule { }
