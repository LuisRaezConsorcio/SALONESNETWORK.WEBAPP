import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FilterComponent } from '../../../Components/filter/filter.component';
import { BreadcrumbsComponent } from '../../../Components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,GLOBAL_IMPORTS, FilterComponent, BreadcrumbsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  ocultarScroll: boolean = false; // Propiedad para las clases del div

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Escuchar cambios en las rutas
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Filtrar solo cuando la navegación termina
      .subscribe(() => {
      });

  }



  

}
