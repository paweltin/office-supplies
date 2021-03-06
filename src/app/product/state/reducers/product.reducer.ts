import {ProductActions, ProductActionTypes} from '../actions/product.actions';
import * as fromRoot from '../../../reducers';
import {Product} from '../../interface/product';

export const productFeatureKey = 'product';

export interface State extends fromRoot.State {
  product: ProductState;
}

export interface ProductState {
  product: Product;
  pending: boolean;
}

export const initialState: ProductState = {
  product: {
    id: null,
    name: '',
    price: null,
    priceOld: null,
    images: [],
    activeImage: null,
    variants: [],
    desc: '',
    features: [],
  },
  pending: false,
};

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.LoadProduct:
      return {
        ...state,
        pending: true,
      };

    case ProductActionTypes.SetProduct:
      return {
        ...state,
        product: action.payload,
        pending: false,
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
