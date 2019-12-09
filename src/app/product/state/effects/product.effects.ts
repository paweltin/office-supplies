import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {map, mergeMap} from 'rxjs/operators';
import * as productActions from '../actions/product.actions';
import {ProductService} from '../../product.service';
import {Product} from '../../interface/product';


@Injectable()
export class ProductEffects {


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.LoadProduct),
    mergeMap((action: productActions.LoadProduct) => this.productService.getProduct(action.payload).pipe(
      map((product: Product) => new productActions.SetProduct(product))
    ))
  );


  constructor(private actions$: Actions<productActions.ProductActions>,
              private productService: ProductService) {
  }

}
