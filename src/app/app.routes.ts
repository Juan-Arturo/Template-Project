import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent },
];
