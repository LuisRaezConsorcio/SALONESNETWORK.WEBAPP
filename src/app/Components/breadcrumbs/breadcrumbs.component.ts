import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsService } from '../../Services/breadcrumbs.service';
import { filter } from 'rxjs';
import { GLOBAL_IMPORTS } from '../../global-imports';

@Component({
  selector: 'app-breadcrumbs',
  imports: [GLOBAL_IMPORTS],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: any[] = [];

  
  titulo: string[] = [];
  isTitleVisible: boolean = false; // Cambio de nombre para mayor claridad

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbsService
  ) {}

  
  ngOnInit(): void {

    this.updateTitleVisibility();
    // Escuchar eventos de navegación para actualizar el breadcrumb
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
        this.updateTitleVisibility();
      });

    this.breadcrumbService.title$.subscribe(
        (titulo) => (this.titulo = titulo)
      );
    // Cargar el breadcrumb inicial al iniciar la aplicación
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs(): void {
    // Construir breadcrumbs desde la raíz
    this.breadcrumbs = this.breadcrumbService.buildBreadcrumb(this.activatedRoute.root.snapshot);

  }

  // Método para verificar si estamos en 'Mensajes' o 'Asuntos'
  private updateTitleVisibility() {
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    this.isTitleVisible = currentRoute === 'Mensajes' || currentRoute === 'Asuntos';
  }
}
