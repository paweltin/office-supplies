import {CartActions, CartActionTypes} from '../actions/cart.actions';
import * as fromRoot from '../../../reducers';
import {Product} from '../../../product/interface/product';

export const cartFeatureKey = 'cart';

export interface State extends fromRoot.State {
  cart: CartState;
}

export interface CartState {
  products: Product[];
  pending: boolean;
}

export const initialState: CartState = {
  products: [],
  pending: false,
};

export function reducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {

    case CartActionTypes.AddProduct:
      return {
        ...state,
        pending: true,
      };

    case CartActionTypes.SetCart:
      return {
        ...state,
        pending: false,
        products: state.products.concat(action.payload)
      };

    default:
      return state;
  }
}
