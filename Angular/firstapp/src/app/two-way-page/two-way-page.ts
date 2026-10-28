import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-page',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './two-way-page.html',
  styleUrl: './two-way-page.css',
})
export class TwoWayPage {
  studentName :string = ""
  email:string=""
  course:string=""
}
