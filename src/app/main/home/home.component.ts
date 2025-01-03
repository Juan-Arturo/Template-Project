import { Component } from '@angular/core';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Footer2Component } from '../../shared/footer2/footer2.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaginatorComponent, HeaderComponent, FooterComponent, Footer2Component, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
