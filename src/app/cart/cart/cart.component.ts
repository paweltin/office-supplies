import {Component, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';
import {formatPrice} from '../../product/interface/product';
import {select, Store} from '@ngrx/store';
import * as fromCart from '../../cart/state/reducers/cart.reducer';
import * as fromCartSelectors from '../state/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  amount: number;
  total: number;
  formatPrice = formatPrice;
  faShoppingCart = faShoppingCart;

  constructor(private store: Store<fromCart.State>) {
  }

  ngOnInit() {
    this.store.pipe(select(fromCartSelectors.getProducts)).subscribe(
      products => {
        this.amount = products.reduce(pv => pv + 1, 0);
        this.total = products.reduce((pv, cv) => pv + cv.price, 0);
      }
    );
  }

}
