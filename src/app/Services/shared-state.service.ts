import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  private showPostSource = new BehaviorSubject<boolean>(false);
  showPost$ = this.showPostSource.asObservable();

  private extensionsToDisableShowPost = ['Noticias', 'Mensajes'];

  constructor(private router: Router) {
    this.monitorRouteChanges();
  }

  toggleShowPost(): void {
    const currentValue = this.showPostSource.value;
    this.showPostSource.next(!currentValue);
  }

  getCurrentValue(): boolean {
    return this.showPostSource.value;
  }

  private monitorRouteChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;

        // Si la ruta actual pertenece a las extensiones, desactiva showPost
        const isInRestrictedExtension = this.extensionsToDisableShowPost.some(ext =>
          currentUrl.includes(ext)
        );

        if (isInRestrictedExtension && this.getCurrentValue()) {
          this.showPostSource.next(false);
        }
      });
  }
}
