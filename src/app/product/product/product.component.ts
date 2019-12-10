import {Component, OnInit} from '@angular/core';
import {Product, formatPrice} from '../interface/product';
import {select, Store} from '@ngrx/store';
import * as fromProduct from '../state/reducers/product.reducer';
import * as fromProductSelectors from '../state/selectors/product.selectors';
import * as productActions from '../state/actions/product.actions';
import * as cartActions from '../../cart/state/actions/cart.actions';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  productId: number = null;
  formatPrice = formatPrice;
  showFullDesc = false;

  constructor(private productStore: Store<fromProduct.State>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productStore.dispatch(new productActions.LoadProduct(this.productId));
    });
    this.product$ = this.productStore.pipe(select(fromProductSelectors.getProduct));
  }

  setImageAsMain($event): void {
    this.productStore.dispatch(new productActions.SetImageAsMain($event.target.dataset.index));
  }

  addToCart($event: MouseEvent): void {
    $event.preventDefault();
    this.productStore.dispatch(new cartActions.AddProduct(this.productId));
  }

  toggleShowFullDesc($event: MouseEvent): void {
    $event.preventDefault();
    this.showFullDesc = !this.showFullDesc;
  }

}
