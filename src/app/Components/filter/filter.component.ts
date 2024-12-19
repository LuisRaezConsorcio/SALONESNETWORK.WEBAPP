import { Component, Input, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';
import { SharedStateService } from '../../Services/shared-state.service';
import { FilterCriteria } from '../../Interfaces/Post.interface';
import { MessageService } from '../../Services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbsService } from '../../Services/breadcrumbs.service';

@Component({
  selector: 'app-filter',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent  implements OnInit {
  title: string = '';
  title2: string = '';
  activacion: boolean = true;

  // Variables para los campos de filtro
  boton:string=''
  idFilter: number = 0;
  startDate: string | null = null;
  endDate: string | null = null;
  filterCriteria: Partial<FilterCriteria> | null = null;

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() model: any;
  @Input() disabled: boolean = false;

  constructor(
    private sharedStateService: SharedStateService, 
    private messageService: MessageService,
    private breadcrumbsService: BreadcrumbsService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
     // Suscribirse al título
     this.breadcrumbsService.titleb$.subscribe((title) => {
      this.title = title;
    });

    // Suscribirse al título
    this.breadcrumbsService.title2$.subscribe((title2) => {
      this.title2 = title2;
    });

    // Suscribirse al estado de activación
    this.breadcrumbsService.activacion$.subscribe((activacion) => {
      this.activacion = activacion;
    });
  }

  contactos = [
    { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' }, { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' }, { id: 1, nombreCompleto: 'Juan Pérez', telefono: '+51 123 456 789', correo: 'juan.perez@ejemplo.com', cargo: 'Gerente General' },
    { id: 2, nombreCompleto: 'María Gómez', telefono: '+51 987 654 321', correo: 'maria.gomez@ejemplo.com', cargo: 'Directora de Marketing' },
    { id: 3, nombreCompleto: 'Carlos Sánchez', telefono: '+51 456 789 012', correo: 'carlos.sanchez@ejemplo.com', cargo: 'Analista Financiero' },
  ];

  private isNoticiasRoute(): boolean {
    return this.router.url.includes('Noticias');
  }

  private isPublicacionesRoute(): boolean {
    return this.router.url.includes('Publicaciones');
  }

  private isAsuntosRoute(): boolean {
    return this.router.url.includes('Asuntos');
  }

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

  onTogglePost(): void {
    this.sharedStateService.toggleShowPost();
    // this.updateButtonLabel();
  }

  // Aplicar filtro definitivo al servicio
  applyFilter() {
    console.log('holi')
    if (this.filterCriteria) {
      // Verificar si estamos en la ruta de Noticias
      if (this.isNoticiasRoute()) {
        // Aplicar filtros específicos para Noticias
        this.filterCriteria.subject=false;
        this.filterCriteria.seccion=undefined,
        this.filterCriteria.paisId=undefined,
        this.filterCriteria.subMenuId=undefined,
        this.filterCriteria.tercerNivelId=undefined,
        this.filterCriteria.personId = 2; // Asignar un personId específico si es necesario
        this.filterCriteria.noticiaId = undefined; // Limpiar noticiaId
        this.filterCriteria.startDate = undefined;
        this.filterCriteria.endDate = undefined;
      console.log(this.filterCriteria)


  
      } 
      
      if(this.isPublicacionesRoute()) {
        // Aplicar filtros generales para Mensajes
        this.filterCriteria.subject=undefined;

        this.filterCriteria.seccion=undefined,
        this.filterCriteria.paisId=undefined,
        this.filterCriteria.subMenuId=undefined,
        this.filterCriteria.tercerNivelId=undefined,
        this.filterCriteria.personId = 6; // Asignar un personId específico si es necesario
        this.filterCriteria.noticiaId = undefined; // Limpiar noticiaId
        this.filterCriteria.startDate = undefined;
        this.filterCriteria.endDate = undefined;
      console.log(this.filterCriteria)

      }

      if(this.isAsuntosRoute()) {
        // Aplicar filtros generales para Mensajes
        this.filterCriteria.subject=true;

        this.filterCriteria.personId = 5; // Asignar un personId específico si es necesario
        this.filterCriteria.noticiaId = undefined; // Limpiar noticiaId
        this.filterCriteria.startDate = undefined;
        this.filterCriteria.endDate = undefined;
      }
  
      // Pasar los filtros al servicio
      console.log(this.filterCriteria)
      this.messageService.setTempFilterCriteria(this.filterCriteria);
    }
  }

  // Método para aplicar filtros
  applySecondFilter() {
    this.filterCriteria = this.messageService.getTempFilterCriteria();
    if (this.filterCriteria) {
      // Verificar la ruta y aplicar los filtros correspondientes
      const updatedCriteria: Partial<FilterCriteria> = this.isNoticiasRoute()
        ? {
            subject: false,
            seccion: undefined,
            paisId: undefined,
            subMenuId: undefined,
            tercerNivelId: undefined,
            noticiaId: this.idFilter ? Number(this.idFilter) : undefined,
            startDate: this.startDate ? this.startDate : undefined,
            endDate: this.endDate ? this.endDate : undefined,
          }
        : this.isPublicacionesRoute()
        ? {
          subject: undefined,
          personId:6,
          seccion: undefined,
          paisId: undefined,
          subMenuId: undefined,
          tercerNivelId: undefined,
          noticiaId: this.idFilter ? Number(this.idFilter) : undefined,
          startDate: this.startDate ? this.startDate : undefined,
          endDate: this.endDate ? this.endDate : undefined,
            // Puedes agregar otros filtros específicos para Publicaciones aquí
          }
        : {
            subject: true, // Ajuste general para otras rutas
            personId: undefined,
            noticiaId: this.idFilter ? Number(this.idFilter) : undefined,
            startDate: this.startDate ? this.startDate : undefined,
            endDate: this.endDate ? this.endDate : undefined,
          };
  
      // Combinamos los criterios anteriores con los nuevos
      const combinedCriteria: Partial<FilterCriteria> = {
        ...this.filterCriteria,
        ...updatedCriteria,
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
