import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './footer/footer.component';
import {AsideComponent} from './aside/aside.component';
import {CartModule} from '../cart/cart.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CartModule,
  ]
})
export class LayoutModule {
}
