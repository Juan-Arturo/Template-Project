import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Footer2Component } from '../shared/footer2/footer2.component';
import { Header2Component } from '../shared/header2/header2.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,
      FooterComponent, Footer2Component, SidebarComponent,Header2Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
