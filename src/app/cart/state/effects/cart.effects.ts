import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import * as cartActions from '../actions/cart.actions';
import {CartService} from '../../cart.service';
import {Product} from '../../../product/interface/product';



@Injectable()
export class CartEffects {


  @Effect()
  loadCarts$ = this.actions$.pipe(
      ofType(cartActions.CartActionTypes.AddProduct),
      mergeMap((action: cartActions.AddProduct) => this.cartService.addProduct(action.payload).pipe(
        map((product: Product) => new cartActions.SetCart(product))
      ))
  );


  constructor(private actions$: Actions<cartActions.CartActions>,
              private cartService: CartService) {}

}
