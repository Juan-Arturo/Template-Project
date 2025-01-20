import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NewslatterComponent } from './main/newslatter/newslatter.component';
import { RegisterComponent } from './main/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'newslatter', component: NewslatterComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: HomeComponent },
];
