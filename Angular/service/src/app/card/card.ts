import { Component, inject } from '@angular/core';
import { CartService } from '../cart';

@Component({
  selector: 'app-card',
  imports: [],
  template:`
  <h2>Cart Items</h2>
  @for (item of card.cart(); track $index) {
    <p>{{item}}</p>
  }`
})
export class Card {
  card = inject(CartService)
}
