import {ProductActions, ProductActionTypes, SetImageAsMain} from '../actions/product.actions';
import * as fromRoot from '../../../reducers';
import {Product} from '../../interface/product';

export const productFeatureKey = 'product';

export interface State extends fromRoot.State {
  product: ProductState;
}

export interface ProductState {
  product: Product;
}

export const initialState: ProductState = {
  product: {
    id: null,
    images: [],
    activeImage: 0
  },
};

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.SetProduct:
      return {
        ...state,
        product: action.payload,
      };

    case ProductActionTypes.SetImageAsMain:
      return {
        ...state,
        product: {
          ...state.product,
          activeImage: action.payload
        },
      };

    default:
      return state;
  }
}
