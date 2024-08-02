import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocodePageComponent } from './promocode-page/promocode-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  { path: 'Promocode', component: PromocodePageComponent ,title:'PROMOCODE-LOCALLY'},
  { path: 'Mens/:genderid', component: ProductsListComponent ,title:"MENS-LOCALLY"},
  { path: 'Woamens/:genderid', component: ProductsListComponent ,title:"WOAMENS-LOCALLY"},
  { path: 'Productdeatiles/:id', component: ProductDeatilsComponent },
  { path: 'addPrd', component: AddproductComponent },
  { path: 'update/:id', component: UpdateproductComponent }
];

@NgModule({
  declarations: [
    PromocodePageComponent,
    ProductsListComponent,
    ProductDeatilsComponent,
    AddproductComponent,
    UpdateproductComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductModuleModule {}
