import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoItem } from '../../models/carritoItem';

@Component({
  selector: 'carrito-modal',
  standalone: true,
  imports: [CarritoComponent],
  templateUrl: './carrito-modal.component.html'
})
export class CarritoModalComponent {
  @Input() items: CarritoItem[] = [];

  //@Input() total: number = 0;

  @Output() idProductoEventEmitter = new EventEmitter();

  @Output() abrirEventEmitter = new EventEmitter();

  abrirCarrito(): void {
    this.abrirEventEmitter.emit();
  }
  
  eliminarProducto(id: number) {
    this.idProductoEventEmitter.emit(id);
  }
}
