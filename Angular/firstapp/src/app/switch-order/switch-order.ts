import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-order',
  imports: [FormsModule,CommonModule],
  templateUrl: './switch-order.html',
  styleUrl: './switch-order.css',
})
export class SwitchOrder {
  orderId :number = 1001;
  orderStatus :string = "Pending";
}
