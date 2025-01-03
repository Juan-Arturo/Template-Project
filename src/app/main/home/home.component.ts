import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Footer2Component } from '../../shared/footer2/footer2.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { Header2Component } from '../../shared/header2/header2.component';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, Header2Component,  Footer2Component, SidebarComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
