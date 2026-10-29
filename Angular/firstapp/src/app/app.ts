import { Component } from "@angular/core";
import { Home } from "./home/home";
import { TwoWayPage } from "./two-way-page/two-way-page";
import { Parent } from "./parent/parent";

@Component(
  {
    selector:"app-root",
    standalone:true,
    imports: [Parent],
    templateUrl:'./app.html',
    styleUrl:'./app.css'
  }
)

export class App{
  title = "firstApp"
  name="Pavithra"
  age=20
  course = "Angular"
}


// Components->Angular components
// selector ->HTML tag used to render component
//standalone-> not need a angular ng module
// imports

// to create a new componnet->ng generate component Home