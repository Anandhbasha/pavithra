import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Navbar } from './navbar/navbar';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Navbar, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service');
}
