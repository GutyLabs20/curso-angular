import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15500
    },
    {
      nombre: 'Vegeta',
      poder: 10500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // cambiarNombre( event:any ){
  //   console.log(event.target.value);
  // }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log( this.nuevo );

    //se agrega nuevo item al array
    this.personajes.push( this.nuevo );
    //Despues de listar, con esto los campos se limpiar
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}
