import { Component, inject } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-navbar',
  imports: [],
  template:`
  <h2>New Shop</h2>
  <p>CartCount:{{cartServ.getCartCount()}}</p>`
})
export class Navbar {
  cartServ = inject(CartService)
}
