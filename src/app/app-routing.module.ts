import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';


const routes: Routes = [
  // {path: '', component: ProductListComponent},
  // {path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
