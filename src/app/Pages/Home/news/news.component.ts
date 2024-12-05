import { Component } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { CardsComponent } from '../../../Components/cards/cards.component';
import { FilterComponent } from '../../../Components/filter/filter.component';

@Component({
  selector: 'app-news',
  imports: [GLOBAL_IMPORTS,CardsComponent,FilterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
