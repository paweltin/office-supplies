import {Component} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'office-supplies';
  faShoppingCart = faShoppingCart;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
}
