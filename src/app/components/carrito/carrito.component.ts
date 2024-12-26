import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

//Modelos
import { CarritoItem } from '../../models/carritoItem';


@Component({
  selector: 'carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html'
})
export class CarritoComponent implements OnChanges {

  @Input() items: CarritoItem[] = [];

  total = 0;

  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calcularTotal();
    this.guardarSesion();
  }

  @Output() idProductoEventEmitter = new EventEmitter();

  calcularTotal(): void {
    this.total = this.items.reduce( (acumulador, item) => acumulador + item.cantidad * item.producto.precio, 0);
  }

  guardarSesion(): void {
    sessionStorage.setItem('carrito', JSON.stringify(this.items));
  }

  eliminarProducto(id: number) {
    this.idProductoEventEmitter.emit(id);
  }

}
