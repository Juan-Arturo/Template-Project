import { Component } from '@angular/core';
import { LoginComponent } from '../../shared/login/login.component';
import { TablesComponent } from "../../shared/tables/tables.component";
import { NewslatterTwoComponent } from '../../shared/newslatter-two/newslatter-two.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, TablesComponent,NewslatterTwoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
