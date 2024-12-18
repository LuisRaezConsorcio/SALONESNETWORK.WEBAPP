import { Component, Input, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';
import { SharedStateService } from '../../Services/shared-state.service';
import { FilterCriteria } from '../../Interfaces/Post.interface';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-filter',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  // Variables para los campos de filtro
  idFilter: number = 0;
  startDate: string | null = null; // Fecha seleccionada en el primer calendario
  endDate: string | null = null;   // Fecha seleccionada en el segundo calendario


  filterCriteria: Partial<FilterCriteria> | null = null;

  @Input() label: string = ''; // Texto de la etiqueta
  @Input() id: string = ''; // Identificador único
  @Input() type: string = 'text'; // Tipo de input
  @Input() model: any; // Modelo para Two-way Binding
  @Input() disabled: boolean = false; // Deshabilitar input

  contactos = [
    { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' }, { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' }, { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' },
  ];


  onStartDateChange(): void {
    // Si se cambia la fecha inicial, limpia la fecha final si ya no es válida
    if (this.endDate && this.startDate && new Date(this.endDate) < new Date(this.startDate)) {
      this.endDate = null;
    }
  }

  loadTempFilter() {
    this.filterCriteria = this.messageService.getTempFilterCriteria();
    this.applyFilter()
  }

  constructor(private sharedStateService: SharedStateService, private messageService: MessageService) {

  }

  onTogglePost(): void {
    this.sharedStateService.toggleShowPost();
    // this.updateButtonLabel();
  }

  // Aplicar filtro definitivo al servicio
  applyFilter() {
    if (this.filterCriteria) {
      // Aquí puedes modificar o agregar más criterios, como personId
      this.filterCriteria.personId = 5; // 16 Simulación este número fue puesto porque es el id que le estamos asignado a carlos palomino
      this.filterCriteria.noticiaId=undefined;
      this.filterCriteria.startDate=undefined;
      this.filterCriteria.endDate=undefined;
      this.messageService.setTempFilterCriteria(this.filterCriteria);
    }
  }

  applySecondFilter() {
    this.filterCriteria = this.messageService.getTempFilterCriteria();
    if (this.filterCriteria) {
      // Crear un nuevo objeto con los valores que deseas actualizar
      const updatedCriteria: Partial<FilterCriteria> = {
        personId: undefined,  // Se establece como undefined o se podría omitir si no se quiere modificar
        noticiaId: this.idFilter ? Number(this.idFilter) : undefined,
        startDate: this.startDate ? this.startDate : undefined,
        endDate: this.endDate ? this.endDate : undefined,
      };
  
      // Combinamos los criterios anteriores con los nuevos, sin sobrescribir los valores existentes
      const combinedCriteria: Partial<FilterCriteria> = {
        ...this.filterCriteria,  // Mantener los valores previos
        ...updatedCriteria,      // Sobrescribir con los nuevos valores donde sea necesario
      };
  
      // Pasamos los criterios combinados al servicio
      this.messageService.setTempFilterCriteria(combinedCriteria);
  
    } else {
      console.error('filterCriteria no está inicializado correctamente');
    }
  }

  sendFilter(
    subject: boolean,
    seccionid: number,
    countryid: number,
    submenuid?: number,
    tercernivelid?: number,
    personid?: number,
    noticiaId?: number,
    startDate?: string,
    endDate?: string
  ) {
    // Crear el objeto filterCriteria con los valores del filtro que provienen del Filter
    const filterCriteria: Partial<FilterCriteria> = {
      subject,
      seccion: seccionid,
      paisId: countryid,
      subMenuId: submenuid,
      tercerNivelId: tercernivelid,
      personId: personid,
      noticiaId: noticiaId,
      startDate: startDate,
      endDate: endDate,
    };


    // Pasar al servicio para actualizar el tempFilterCriteria sin sobrescribir todo
    this.messageService.setTempFilterCriteria(filterCriteria);
  }

}
