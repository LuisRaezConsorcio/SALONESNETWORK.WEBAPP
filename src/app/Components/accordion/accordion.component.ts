import { Component, OnInit } from '@angular/core';
import { GLOBAL_IMPORTS } from '../../global-imports';

@Component({
  selector: 'app-accordion',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit{



  menu = [
    {
      id: 1,
      nombre: "Agronomía y Proyectos Industriales",
      descripcion: "Bienvenido al inicio",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 2,
      nombre: "Aires Acondicionados",
      descripcion: "Explora nuestros servicios",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 1",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 1",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 1",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 3,
      nombre: "Analisis de Producción y Diferencias",
      descripcion: "Conoce más sobre nosotros",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría2",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 2",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 2",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 4,
      nombre: "Apuestas Deportivas y Diferencias",
      descripcion: "Ponte en contacto con nosotros",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 3",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 3",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 3",
          tercerNivel: [],
        },
      ],
    },
  
  
    {
      id: 5,
      nombre: "Arrendamientos",
      descripcion: "Bienvenido al inicio",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 4",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 4",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 4",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 6,
      nombre: "Atención y alertas Alert View",
      descripcion: "Explora nuestros servicios",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 5",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 5",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 5",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 7,
      nombre: "Auditorías",
      descripcion: "Conoce más sobre nosotros",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 6",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 6",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 6",
          tercerNivel: [],
        },
      ],
    },
    {
      id: 8,
      nombre: "Avace de Obra",
      descripcion: "Ponte en contacto con nosotros",
      subMenus: [
        {
          id: 21,
          nombre: "Consultoría 7",
          tercerNivel: [],
        },
        {
          id: 22,
          nombre: "Desarrollo Web 7",
          tercerNivel: [
          { id: 221, nombre: 'Landing Page' },
          { id: 222, nombre: 'E-commerce' },
          { id: 223, nombre: 'Portafolio' },
        ],
        },
        {
          id: 23,
          nombre: "Marketing Digital 7",
          tercerNivel: [],
        },
      ],
    },
  ];

  selectedMenu: any = null;

  ngOnInit() {
    // Al cargar la página, selecciona el primer menú
    this.selectedMenu = this.menu[0];
  }

  toggleMenu(menu: any) {
    // Evita ocultar el acordeón si se selecciona el mismo menú
    if (this.selectedMenu !== menu) {
      this.selectedMenu = menu;
    }
  }



}
