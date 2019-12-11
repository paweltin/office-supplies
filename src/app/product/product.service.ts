import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from './interface/product';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(id: number): Observable<Product> {
    // fake request
    return of({
      id,
      name: 'Paper',
      price: 565,
      priceOld: 670,
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
      variants: ['White', 'Blue', 'Red', 'Pink'],
      desc: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>`,
      features: [
        `<h2>Paper is awesome!</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>`,
        `<h2>Paper is awesome!</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>`,
        `<h2>Paper is awesome!</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor
      sit amet la.</p>`
      ],
    }).pipe(delay(2000));
  }
}
