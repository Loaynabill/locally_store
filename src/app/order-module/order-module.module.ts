import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SucessorderComponent } from './sucessorder/sucessorder.component';

const routes:Routes=[{path:'order',component:OrderComponent},
  {path:'sucess',component:SucessorderComponent}
]


@NgModule({
  declarations: [
    OrderComponent,
    SucessorderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // FormControl,
    // Validators,
    // FormGroup,
    // FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModuleModule { }
