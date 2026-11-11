import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Loginform } from './loginform/loginform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Loginform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-routing');
}
