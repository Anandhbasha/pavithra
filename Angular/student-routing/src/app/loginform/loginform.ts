import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../students/student.model';

@Component({
  selector: 'app-loginform',
  imports: [FormsModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {
  student:Student = {
    name:"",
    email:"",
    age:0,
    course:""
  }
  onSubmit(){
    console.log(this.student);
    
  }
}
