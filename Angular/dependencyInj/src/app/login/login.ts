import { Component, inject } from '@angular/core';
import { Notification } from '../service/notification';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  notification = inject(Notification)
  login(){
    console.log("Hello")
    this.notification.showSuccess("Login Successfull")
  }
}
