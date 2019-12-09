import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product/product.component';
import {ProductModule} from './product/product.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'product/1',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductComponent,
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
