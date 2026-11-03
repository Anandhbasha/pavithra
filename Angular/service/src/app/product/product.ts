import { Component, inject } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-product',
  imports: [],
  template:
  `<h2>Laptop</h2>
  <button (click)="addProd()">Add to cart</button>`
})
export class Product {
  private cartService = inject(CartService)
  addProd(){
    this.cartService.addToCart("Laptops")
  }
}
