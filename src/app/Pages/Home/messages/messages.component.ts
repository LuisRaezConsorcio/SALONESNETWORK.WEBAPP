import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../../Components/cards/cards.component';

@Component({
  selector: 'app-messages',
  imports: [ CardsComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{

  ngOnInit(): void {
  }
}
