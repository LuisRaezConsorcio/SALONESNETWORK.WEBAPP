import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../../../Components/accordion/accordion.component';
import { GLOBAL_IMPORTS } from '../../../global-imports';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [GLOBAL_IMPORTS,AccordionComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{

  isMessagesRoute: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Verificar si estamos en la ruta 'Messages' cuando se cargue el componente
    this.checkIfMessagesRoute();

    // Suscribirnos a los cambios en la ruta activa
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkIfMessagesRoute();
    });
  }

  // Método para comprobar si estamos en la ruta 'Messages'
  private checkIfMessagesRoute() {
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    this.isMessagesRoute = currentRoute === 'Mensajes';
  }

}
