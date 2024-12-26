import { Component, EventEmitter, Input, Output } from '@angular/core';

//Modelos
import { CarritoItem } from '../../models/carritoItem';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() items: CarritoItem[] = [];

  @Output() abrirEventEmitter = new EventEmitter();

  abrirCarrito(): void {
    this.abrirEventEmitter.emit();
  }

}
