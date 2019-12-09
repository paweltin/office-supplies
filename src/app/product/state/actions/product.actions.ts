import {Action} from '@ngrx/store';
import {Product} from '../../interface/product';

export enum ProductActionTypes {
  LoadProduct = '[Product] Load Product',
  SetProduct = '[Product] Set Product',
  SetImageAsMain = '[Product] Set Image As Main',


}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;

  constructor(public payload: number) {
  }
}

export class SetProduct implements Action {
  readonly type = ProductActionTypes.SetProduct;

  constructor(public payload: Product) {
  }
}

export class SetImageAsMain implements Action {
  readonly type = ProductActionTypes.SetImageAsMain;

  constructor(public payload: number) {
  }
}


export type ProductActions = LoadProduct | SetProduct | SetImageAsMain;
