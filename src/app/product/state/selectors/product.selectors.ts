import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.productFeatureKey
);

export const getProduct = createSelector(
  selectProductState,
  state => state.product
);

export const getPending = createSelector(
  selectProductState,
  state => state.pending
);
