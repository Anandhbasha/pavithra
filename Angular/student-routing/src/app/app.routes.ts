import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Students } from './students/students';
import { Studentdetails } from './studentdetails/studentdetails';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",component:Home},
    {path:"about",component:About},
    {path:"students",component:Students},
    {path:"student/:id",component:Studentdetails},
    {path:"**",redirectTo:"home"}
];
