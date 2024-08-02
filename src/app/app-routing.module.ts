import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MainlayoutComponent } from './pages/mainlayout/mainlayout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/user-module/user-module.module').then(
        (m) => m.UserModuleModule
      ),
  },
  {
    path: "",
    component: MainlayoutComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full',title: 'HOME-PAGE' },
      { path: 'Home', component: HomepageComponent, title: 'HOME-PAGE' },
      { path: 'contact', component: ContactUsComponent, title: 'contact-us' },
      {
        path: 'Add',
        loadChildren: () =>
          import('../app/order-module/order-module.module').then(
            (m) => m.OrderModuleModule
          ),
      },

      {
        path: 'Product',
        loadChildren: () =>
          import('../app/product-module/product-module.module').then(
            (m) => m.ProductModuleModule
          ),
      },
    ],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
