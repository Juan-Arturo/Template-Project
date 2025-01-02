import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { FoterVdaComponent } from '../shared/foter-vda/foter-vda.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,PaginatorComponent,FoterVdaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
