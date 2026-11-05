import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students = [
    {id:101,name:"Pavithra",course:"Angular" },
    {id:102,name:"Manoj",course:"React" },
    {id:103,name:"Tharani",course:"Flutter" }
   ]
}
