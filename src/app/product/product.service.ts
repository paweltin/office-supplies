import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(id: number): Observable<Product> {
    return of({
      id,
      images: [
        {
          src: '/assets/products/paper/paper1.jpg',
          alt: 'Paper1',
        },
        {
          src: '/assets/products/paper/paper2.jpg',
          alt: 'Paper2',
        },
        {
          src: '/assets/products/paper/paper3.jpg',
          alt: 'Paper3',
        },
      ],
      activeImage: 0,
    });
  }
}
