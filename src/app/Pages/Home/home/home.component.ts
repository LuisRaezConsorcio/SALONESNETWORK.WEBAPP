import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FilterComponent } from '../../../Components/filter/filter.component';
import { BreadcrumbsComponent } from '../../../Components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from '../../../Services/breadcrumbs.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,GLOBAL_IMPORTS, FilterComponent, BreadcrumbsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ocultarScroll: boolean = false; // Propiedad para las clases del div

  constructor(private router: Router, private route: ActivatedRoute,private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    //Escuchar cambios en las rutas
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Filtrar solo cuando la navegación termina
      .subscribe(() => {
      });

      this.breadcrumbsService.setStringList('Mis Noticias','Nueva Noticia',true);

  }

  setStringsForRoute(route: number): void {
    let title: string='';
    let title2: string='';
    let activacion: boolean=true;
    switch (route) {
      case 1:
        title = 'Mis Noticias';
        title2='Nueva Noticia';
        activacion = true;
        break;
      case 2:
        title = 'Mis Mensajes';
        title2='Nuevo Mensaje';

        activacion = true;
        break;
      case 3:
        title = 'Mis Post';
        title2='Nuevo Post'
        activacion = false;
        break;
    }
    this.breadcrumbsService.setStringList(title,title2,activacion);
  }



  

}
