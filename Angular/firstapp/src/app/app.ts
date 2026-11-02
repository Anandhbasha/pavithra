import { Component } from "@angular/core";
import { Home } from "./home/home";
import { TwoWayPage } from "./two-way-page/two-way-page";
import { Parent } from "./parent/parent";
import { Dashboard } from "./dashboard/dashboard";
import { Conditional } from "./conditional/conditional";
import { Login } from "./login/login";
import { HiddenPassword } from "./hidden-password/hidden-password";
import { SwitchOrder } from "./switch-order/switch-order";
import { ClassNg } from "./class-ng/class-ng";

@Component(
  {
    selector:"app-root",
    standalone:true,
    imports: [Parent, Dashboard, Home, Conditional, Login, HiddenPassword, SwitchOrder, ClassNg],
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