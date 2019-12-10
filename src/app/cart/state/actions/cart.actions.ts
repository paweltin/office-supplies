import {Action} from '@ngrx/store';
import {Product} from '../../../product/interface/product';

export enum CartActionTypes {
  AddProduct = '[Cart] Add Product',
  SetCart = '[Cart] Set Cart',


}

export class AddProduct implements Action {
  readonly type = CartActionTypes.AddProduct;

  constructor(public payload: number) {
  }
}

export class SetCart implements Action {
  readonly type = CartActionTypes.SetCart;

  constructor(public payload: Product) {
  }
}


export type CartActions = AddProduct | SetCart;
