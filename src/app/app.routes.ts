import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NewslatterComponent } from './main/newslatter/newslatter.component';
import { RegisterComponent } from './main/register/register.component';
import { TableIUComponent } from './main/table-iu/table-iu.component';
import { LoginIUComponent } from './main/login-iu/login-iu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'newslatter', component: NewslatterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tableiu', component: TableIUComponent },
    { path: 'login', component: LoginIUComponent },
    { path: '**', component: HomeComponent },
];
