import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hidden-password',
  imports: [FormsModule],
  templateUrl: './hidden-password.html',
  styleUrl: './hidden-password.css',
})
export class HiddenPassword {
  password: string = '';
  showPassword: boolean = false;
  togglePassword(){
    this.showPassword = !this.showPassword;
  }
}
