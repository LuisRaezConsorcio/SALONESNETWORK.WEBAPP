import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private dataStore = new BehaviorSubject<any>(null); // Almacén de datos temporal
  data$ = this.dataStore.asObservable(); // Observable para que otros componentes se suscriban

  setData(data: any): void {
    this.dataStore.next(data); // Establece nuevos datos
  }

  clearData(): void {
    this.dataStore.next(null); // Limpia los datos
  }

  constructor() { }
}
