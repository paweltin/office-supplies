import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './state/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './state/effects/cart.effects';


@NgModule({
  declarations: [CartComponent],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
  ]
})
export class CartModule {
}
