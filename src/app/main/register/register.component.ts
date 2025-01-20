import { Component } from '@angular/core';
import { FormOneComponent } from '../../shared/form-one/form-one.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormOneComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
