import { Component } from '@angular/core';
import { GLOBAL_IMPORTS } from './global-imports';

@Component({
  selector: 'app-root',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SALONESNETWORK';
}
