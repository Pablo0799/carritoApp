import { Component, EventEmitter, Input, Output,  } from '@angular/core';

//Modelos
import { Producto } from '../../models/producto';

//Componentes
import { ProductoCardComponent } from "../producto-card/producto-card.component";


@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './catalogo.component.html'
})

export class CatalogoComponent {

  @Input() productos!: Producto[];

  @Output() productoEventEmitter: EventEmitter<Producto> = new EventEmitter();

  agregarCarrito(producto: Producto) {
    this.productoEventEmitter.emit(producto);
  }

}
