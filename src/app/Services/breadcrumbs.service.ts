import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  // Método para construir todo el breadcrumb desde la raíz
  buildBreadcrumb(route: ActivatedRouteSnapshot, breadcrumbs: any[] = []): any[] {
    // Verificar si la ruta tiene un 'breadcrumb' definido
    const label = route.data['breadcrumb'] || null;
    const url = route.url.map(segment => segment.path).join('/');
    if (label && url) {
      breadcrumbs.push({
        label: label,
        url: `/${breadcrumbs.map(b => b.url).join('/')}/${url}`,
      });
    }

    // Si tiene rutas hijas, seguir recorriendo
    if (route.firstChild) {
      return this.buildBreadcrumb(route.firstChild, breadcrumbs);
    }

    return breadcrumbs;
  }
  
}
