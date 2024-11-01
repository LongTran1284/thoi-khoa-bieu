import { Routes } from '@angular/router';
import { TkbBoComponent } from './pages/tkb_bo.component';
import { TkbMeoComponent } from './pages/tkb_meo.component';

export const routes: Routes = [
    {path:'', redirectTo: 'ku-bo', pathMatch: 'full'},
    {path:'ku-bo', component: TkbBoComponent, title:'Thoi Khoa Bieu'},
    {path:'chi-meo', component: TkbMeoComponent, title:'Thoi Khoa Bieu'}
];
