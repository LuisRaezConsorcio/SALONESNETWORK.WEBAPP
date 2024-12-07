import { Component, Input } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';

@Component({
  selector: 'app-filter',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input() label: string = ''; // Texto de la etiqueta
  @Input() id: string = ''; // Identificador único
  @Input() type: string = 'text'; // Tipo de input
  @Input() model: any; // Modelo para Two-way Binding
  @Input() disabled: boolean = false; // Deshabilitar input
  
  contactos = [
    { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' },{ id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' },{ id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' },
  ];
  
}
