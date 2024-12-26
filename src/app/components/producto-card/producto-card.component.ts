import { Component, EventEmitter, Input, Output } from '@angular/core';

//Modelos
import { Producto } from '../../models/producto';


@Component({
  selector: 'producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.component.html'
})
export class ProductoCardComponent {

  @Input() producto!: Producto;
  
  @Output() productoEventEmitter: EventEmitter<Producto> = new EventEmitter();

  agregarCarrito(producto: Producto) {
    this.productoEventEmitter.emit(producto);
  }

}
