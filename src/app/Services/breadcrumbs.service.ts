import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private TitleSourceb = new BehaviorSubject<string[]>([]);
  title$ = this.TitleSourceb.asObservable();

  // Método para actualizar el titulo de asunto
  setTitle(title: string[]): void {
    this.TitleSourceb.next(title);
  }


  // BehaviorSubject para el título
  private titleSource = new BehaviorSubject<string>('');
  titleb$ = this.titleSource.asObservable();

  // BehaviorSubject para el título
  private title2Source = new BehaviorSubject<string>('');
  title2$ = this.title2Source.asObservable();

  // BehaviorSubject para el estado de activación
  private activacionSource = new BehaviorSubject<boolean>(true);
  activacion$ = this.activacionSource.asObservable();

  // Método para actualizar las dos variables
  setStringList(title: string, title2: string, activacion: boolean): void {
    this.titleSource.next(title);
    this.activacionSource.next(activacion);
    this.title2Source.next(title2);
  }

  


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
