import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {StoreModule} from '@ngrx/store';
import * as fromProduct from './state/reducers/product.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './state/effects/product.effects';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
    FontAwesomeModule
  ]
})
export class ProductModule {
}
