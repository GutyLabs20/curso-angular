import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Antes
  // @Input() personajes: any[] = [];

  //Despues
  @Input() personajes: Personaje[] = [];

}
