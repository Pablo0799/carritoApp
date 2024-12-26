import { Component, Input, OnInit } from '@angular/core';

//Importar servicios
import { ProductoService } from '../services/producto.service';


import { Producto } from '../models/producto';

//Componentes
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CarritoItem } from '../models/carritoItem';
import { NavbarComponent } from './navbar/navbar.component';
import { CarritoModalComponent } from './carrito-modal/carrito-modal.component';


@Component({
  selector: 'carrito-app',
  standalone: true,
  imports: [CatalogoComponent, NavbarComponent, CarritoModalComponent],
  templateUrl: './carrito-app.component.html',
})
export class CarritoAppComponent implements OnInit {

  productos: Producto[] = [];

  items: CarritoItem[] = [];

  //total: number = 0;

  mostrarCarrito: boolean = false;

  constructor( private productoService: ProductoService ) { 

  }

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();
    this.items = JSON.parse(sessionStorage.getItem('carrito')! || '[]');
    //this.calcularTotal();
  }

  agregarCarrito(producto: Producto): void {
    const existeItem = this.items.find( item => item.producto.id === producto.id);
    if( existeItem ) {
      this.items = this.items.map( item => {
        if( item.producto.id === producto.id) {
          return { 
            ...item, 
            cantidad: item.cantidad + 1 
          }
        } 
        return item;
      });
    } else {
      this.items = [...this.items, { producto: { ...producto }, cantidad: 1}];
    }
    //this.calcularTotal();
    //this.guardarSesion();
  }

  eliminarProducto(id: number): void {
    this.items = this.items.filter( item => item.producto.id !== id);
    if ( this.items.length === 0 ) {
      sessionStorage.removeItem('carrito');
      sessionStorage.clear();
    }  
    //this.calcularTotal();
    //this.guardarSesion();
  }

  /*calcularTotal(): void {
    this.total = this.items.reduce( (acumulador, item) => acumulador + item.cantidad * item.producto.precio, 0);
  }

  guardarSesion(): void {
    sessionStorage.setItem('carrito', JSON.stringify(this.items));
  }*/

  abrirCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito; //cambia el valor de mostrarCarrito
  }

}
