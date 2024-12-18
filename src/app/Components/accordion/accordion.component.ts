import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';
import { BreadcrumbsService } from '../../Services/breadcrumbs.service';
import { MessageService } from '../../Services/message.service';
import { FilterCriteria } from '../../Interfaces/Post.interface';



@Component({
  selector: 'app-accordion',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {

  @Output() filterApplied = new EventEmitter<FilterCriteria>();

  sendFilter(subject:boolean, seccionid:number, countryid:number, submenuid?:number, tercernivelid?:number) {

    let filterCriteria: FilterCriteria = {
      subject: subject,
      seccion: seccionid,
      paisId: countryid,
      subMenuId: submenuid,
      tercerNivelId: tercernivelid
    };
    console.log(filterCriteria)
    this.filterApplied.emit(filterCriteria); 
    this.messageService.setFilterCriteria(filterCriteria);
  }

  menu = [
    {
      id: 1,
      nombre: "Agronomía y Proyectos Industriales",
      pais: [
        {
          id: 1,
          nombre: 'Peru',
          subMenus: [
            { id: 1, nombre: "Codo del Pozuzo", tercerNivel: [] },
            { id: 2, nombre: "Consolidado Agronomía", tercerNivel: [] },
            { id: 3, nombre: "Forestal", tercerNivel: [] },
            { id: 4, nombre: "Fundo Don Edmundo", tercerNivel: [{ id: 1, nombre: "Fundo Don Edmundo" }] },
            { id: 5, nombre: "Fundo Poroto - Trujillo", tercerNivel: [{ id: 1, nombre: "Fundo Poroto - Trujillo" }, { id: 2, nombre: "Fundo Poroto - Trujillo" }] },
            { id: 6, nombre: "Otros Cultivos", tercerNivel: [{ id: 1, nombre: "Otros Cultivos" }, { id: 2, nombre: "Otros Cultivos" }, { id: 3, nombre: "Otros Cultivos" }] },
            { id: 7, nombre: "PLANTA DE DESHIDRATADOS", tercerNivel: [] },
            { id: 8, nombre: "Proyecto agroindustrial sobre cacao", tercerNivel: [] },
            { id: 9, nombre: "Proyecto Palto - Bajo Mashoca / CDP", tercerNivel: [] },
            { id: 10, nombre: "Proyecto Paracas", tercerNivel: [] },
            { id: 11, nombre: "Proyecto Planta Maracuyá", tercerNivel: [] },
            { id: 12, nombre: "Terrenos Chancayllo *", tercerNivel: [] },
            { id: 13, nombre: "Agronomía", tercerNivel: [] }
          ]
        },
        {
          id: 2,
          nombre: 'Francia',
          subMenus: [{ id: 1, nombre: "Codo del Pozuzo", tercerNivel: [] }, { id: 4, nombre: "Fundo Don Edmundo", tercerNivel: [{ id: 1, nombre: "Fundo Don Edmundo" }] },]
        }
      ]

    },
    {
      id: 2,
      nombre: "AIRES ACONDICIONADOS",
      pais: [
        {
          id: 1,
          nombre: 'Peru',
          subMenus: [
            { id: 1, nombre: "..General", tercerNivel: [] },
            { id: 2, nombre: "Area A & B", tercerNivel: [] },
            { id: 3, nombre: "Area Almacen", tercerNivel: [] },
            { id: 4, nombre: "Area Analisis de Produccion", tercerNivel: [] },
            { id: 5, nombre: "Area Auditoria Interna", tercerNivel: [] },
            { id: 6, nombre: "Area COMEX", tercerNivel: [] },
            { id: 7, nombre: "Area Contabilidad", tercerNivel: [] },
            { id: 8, nombre: "Area Decoraciones", tercerNivel: [] },
            { id: 9, nombre: "Area Finanzas", tercerNivel: [] },
            { id: 10, nombre: "Area Gerencia General", tercerNivel: [] },
            { id: 11, nombre: "Area Gerencia Legal", tercerNivel: [] },
            { id: 12, nombre: "Area Inspectoria 1", tercerNivel: [] },
            { id: 13, nombre: "Area Inspectoria 2", tercerNivel: [] },
            { id: 14, nombre: "Area Marketing", tercerNivel: [] },
            { id: 15, nombre: "Area Operaciones", tercerNivel: [] },
            { id: 16, nombre: "Area RR. HH.", tercerNivel: [] },
            { id: 17, nombre: "Area Seguridad", tercerNivel: [] },
            { id: 18, nombre: "Area Sistemas", tercerNivel: [] },
            { id: 19, nombre: "Area Tecnica", tercerNivel: [] },
            { id: 20, nombre: "Area Textil", tercerNivel: [] },
            { id: 21, nombre: "Area Transportes", tercerNivel: [] },
            { id: 22, nombre: "Boutiques", tercerNivel: [] },
            { id: 23, nombre: "Deli Bakery ANCÓN", tercerNivel: [] },
            { id: 24, nombre: "Deli Bakery CHILCA Km 88", tercerNivel: [] },
            { id: 25, nombre: "Deli Bakery CHORRILLOS", tercerNivel: [] },
            { id: 26, nombre: "Deli Bakery LA PUNTA", tercerNivel: [] },
            { id: 27, nombre: "Deli Bakery NUEVO CAÑETE KM 167", tercerNivel: [] },
            { id: 28, nombre: "Deli Bakery PASAMAYO", tercerNivel: [] },
            { id: 29, nombre: "Deli Bakery SAN BARTOLO", tercerNivel: [] },
            { id: 30, nombre: "Deli Bakery SAN ISIDRO", tercerNivel: [] },
            { id: 31, nombre: "Deli Bakery SANTA ANITA (cerrado)", tercerNivel: [] },
            { id: 32, nombre: "HOTEL INKA PATH", tercerNivel: [] },
            { id: 33, nombre: "Hotel Puno", tercerNivel: [] },
            { id: 34, nombre: "HOTEL WIMBLEDON.", tercerNivel: [] },
            { id: 35, nombre: "Icom Attract", tercerNivel: [] },
            { id: 36, nombre: "IMPRENTA PRINT GRAPH", tercerNivel: [] },
            { id: 37, nombre: "LA BONNE VIE", tercerNivel: [] },
            { id: 38, nombre: "Restaurante COLVILLE", tercerNivel: [] },
            { id: 39, nombre: "Sala 2 de Mayo", tercerNivel: [] }
          ]
        },
        {
          id: 2,
          nombre: 'Ecuador',
          subMenus: []
        }
      ]

    },

    {
      id: 55,
      nombre: "Producción",
      pais: [
        {
          id: 1,
          nombre: 'Peru',
          subMenus: [
            { id: 1, nombre: "Avances Controller Alimentos y Bebidas", tercerNivel: [] },
            { id: 2, nombre: "Almacén Técnico", tercerNivel: [] },
            { id: 3, nombre: ".ALMACEN CENTRAL BOLIVAR", tercerNivel: [] },
            { id: 4, nombre: ".ALMACEN CETICOS PAITA", tercerNivel: [] },
            { id: 5, nombre: ".ALMACEN DB/ Texas-Chorrillos", tercerNivel: [] },
            { id: 6, nombre: ".ALMACEN PUCUSANA 1", tercerNivel: [] },
            { id: 7, nombre: ".ALMACEN PUCUSANA 2", tercerNivel: [] },
            { id: 8, nombre: ".ALMACEN ZOFRA TACNA", tercerNivel: [] }
          ]
        },
        {
          id: 2,
          nombre: 'Ecuador',
          subMenus: []
        }
      ]

    },
    {
      id: 56,
      nombre: "Producción Textil",
      pais: [
        {
          id: 1,
          nombre: 'Peru',
          subMenus: [
            {
              id: 1,
              nombre: "Prueba",
              tercerNivel: []
            }
          ]
        },
        {
          id: 2,
          nombre: 'Ecuador',
          subMenus: []
        }
      ]

    },
    {
      id: 57,
      nombre: "Protocolos de Salas",
      pais: [
        {
          id: 1,
          nombre: 'Peru',
          subMenus: [
            {
              id: 1,
              nombre: "Prueba",
              tercerNivel: []
            }
          ]
        },
        {
          id: 2,
          nombre: 'Ecuador',
          subMenus: []
        }
      ]

    },

  ]

  selectedMenu: any = null;
  selectedCountry: any = null;  // Nuevo estado para el país seleccionado
  dropdownOpen: boolean = false;  // Controla si el dropdown está abierto 

  constructor(private breadcrumbService: BreadcrumbsService, private messageService: MessageService) { }

  selectTitles(seccion: string, seccionid:number, country: string, countryid:number, submenu?: string, submenuid?:number, tercernivel?: string,tercernivelid?:number): void {
    const title = [seccion];
    if (country) title.push(country);
    if (submenu) title.push(submenu);
    if (tercernivel) title.push(tercernivel);

    this.breadcrumbService.setTitle(title);

    if (tercernivel) {
      this.sendFilter(true, seccionid, countryid, submenuid, tercernivelid);
    }
    else if (submenu) {
      if(tercernivelid===0 || tercernivelid===null)
        {
          let id=0
          this.sendFilter(true, seccionid, countryid, submenuid, id);
          //console.log(true, seccionid, countryid, submenuid, id)

        }
        else{
          this.sendFilter(true, seccionid, countryid, submenuid, tercernivelid);
          //console.log(true, seccionid, countryid, submenuid, tercernivelid)

        }
    }
  }

  ngOnInit() {
    // Al cargar la página, selecciona el primer menú
    this.selectedMenu = this.menu[0];

    // Seleccionar el país con id: 1
    this.selectedCountry = this.selectedMenu.pais.find((pais: any) => pais.id === 1);

    // Si no se encuentra el país, se selecciona el primero de la lista
    if (!this.selectedCountry) {
      this.selectedCountry = this.selectedMenu.pais[0];  // Default to the first country if id: 2 is not found
    }
    this.selectTitles(this.selectedMenu.nombre,this.selectedMenu.id, this.selectedCountry.nombre,this.selectedCountry.id);
  }

  toggleMenu(menu: any) {
    // Evita ocultar el acordeón si se selecciona el mismo menú
    if (this.selectedMenu !== menu) {
      this.selectedMenu = menu;
      this.selectedCountry = this.selectedMenu.pais.find((pais: any) => pais.id === 1) || this.selectedMenu.pais[0];
    }
    this.selectTitles(this.selectedMenu.nombre,this.selectedMenu.id, this.selectedCountry.nombre,this.selectedCountry.id);
  }

  selectCountry(pais: any) {
    this.selectedCountry = pais;  // Establece el país seleccionado
    this.dropdownOpen = false;  // Cierra el dropdown
    this.selectTitles(this.selectedMenu.nombre,this.selectedMenu.id, this.selectedCountry.nombre,this.selectedCountry.id);  // Actualiza el breadcrumb
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }



}
