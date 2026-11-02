import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoggedIn: boolean = false;
  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }
}
