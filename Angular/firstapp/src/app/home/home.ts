import { Component, Host, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  template: `<h2>Student Component</h2>`,
  styles: [`h2{color:blue}`],
  encapsulation:ViewEncapsulation.ShadowDom,
})
export class Home {
  name="Anandh"
  course="Angular Training"

  changeName(){
    this.name="Kumar"
  }
}
