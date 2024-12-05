import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../../../Components/filter/filter.component';
import { CardsComponent } from '../../../Components/cards/cards.component';

@Component({
  selector: 'app-messages',
  imports: [FilterComponent, CardsComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{

  ngOnInit(): void {
    console.log('Messages component loaded!');
    // Puedes agregar más lógica aquí si es necesario.
  }
}
