import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  titulo: string = 'Lista de super Heroes'
}

/**
 * Agregamos un nuevo componente al app.module.ts
 */
