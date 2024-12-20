import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private filterParamsSubject = new BehaviorSubject<any>(null);  // Almacenar los parámetros
  filterParams$ = this.filterParamsSubject.asObservable();  // Observable para suscribirse

  constructor() {}

  // Método para almacenar los parámetros
  setFilterParams(params: any): void {
    this.filterParamsSubject.next(params);
  }

  // Método para obtener los parámetros almacenados
  getFilterParams(): any {
    return this.filterParamsSubject.value;
  }

  // Método selectTitles con los parámetros
  selectTitles(seccion: string, seccionid: number, country: string, countryid: number, submenu?: string, submenuid?: number, tercernivel?: string, tercernivelid?: number): void {

    const params = { seccion, seccionid, country, countryid, submenu, submenuid, tercernivel, tercernivelid };
    this.setFilterParams(params);  // Guardar los parámetros en el servicio

  }

  clearFilterParams(): void {
    this.filterParamsSubject.next(null);  // Limpiar los parámetros
  }

  
}
