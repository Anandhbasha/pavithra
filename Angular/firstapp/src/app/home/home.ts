import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name="Anandh"
  course="Angular Training"

  changeName(){
    this.name="Kumar"
  }
}
