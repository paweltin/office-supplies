import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const getProducts = createSelector(
  selectCartState,
  state =>  state.products
);

export const getPending = createSelector(
  selectCartState,
  state =>  state.pending
);
