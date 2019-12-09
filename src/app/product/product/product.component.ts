import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../interface/product';
import {select, Store} from '@ngrx/store';
import * as fromProduct from '../state/reducers/product.reducer';
import * as fromProductSelectors from '../state/selectors/product.selectors';
import * as productActions from '../state/actions/product.actions';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private store: Store<fromProduct.State>,
              private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new productActions.LoadProduct(params.id));
    });
    this.product$ = this.store.pipe(select(fromProductSelectors.getProduct));
  }

  setImageAsMain($event) {
    this.store.dispatch(new productActions.SetImageAsMain($event.target.dataset.index));
  }

}
