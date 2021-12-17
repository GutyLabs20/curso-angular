import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  titulo: string = 'Lista de super Heroes';
  nombre: string = 'IronMan';
  edad: number = 45

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
  }
}

/**
 * Agregamos un nuevo componente al app.module.ts
 */
