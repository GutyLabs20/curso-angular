import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <button (click)="acumular( base )"> +1 </button>

    <span> {{ numero }} </span>

    <button (click)="acumular( -base )"> -1 </button>
  `
})

export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  acumular( valor: number){
    this.numero += valor;
  }
}


/**
 * Aqui agregamos un nuevo component pero tener que ver como llamarlo al
 * app.component.html. Para ello nos dirigimos al fichero llamado
 * app.module.ts y dentro del decorator @NGMODULE dentro del array
 * declararions agregamos nuestro componente "contador.component"
 * Al agregarlo se importara el componente.
 * Luego en app.component.html, colocar la etiqueta
 * <app-contador></app-contador>
 */
