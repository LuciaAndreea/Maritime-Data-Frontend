import { Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';

export const routes: Routes = [
    {path : "ships", component: ShipsComponent},
    {path : '', redirectTo:'/ships', pathMatch: 'full'}
];
