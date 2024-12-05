import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { GLOBAL_IMPORTS } from '../../../global-imports';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,GLOBAL_IMPORTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
