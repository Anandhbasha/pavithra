import { Component } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-dashboard',
  imports: [Counter],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
