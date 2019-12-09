import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product/product.component';
import {ProductModule} from './product/product.module';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ProductModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
