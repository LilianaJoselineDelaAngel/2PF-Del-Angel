import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoListaService } from './services/alumno-lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1PF-Del-Angel';

  nvo = null;
  location: any;
  nuevo(alumn: any) {
    this.nvo = alumn;
  }

  constructor(
    private AlumnoListaService: AlumnoListaService,
    private router: Router
  ) {}

  irinicio() {
    console.log('inicio');
    this.router.navigate(['inicio', { mensaje: 'inicio' }]);
  }
}
