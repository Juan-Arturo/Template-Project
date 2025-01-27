import { Component } from '@angular/core';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
  selector: 'app-login-iu',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-iu.component.html',
  styleUrl: './login-iu.component.css'
})
export class LoginIUComponent {

}
