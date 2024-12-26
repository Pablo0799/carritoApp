import { Injectable } from '@angular/core';

//Modelos
import { Producto } from '../models/producto';

//Importar datos
import { productos } from '../data/producto.data';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  obtenerProductos(): Producto[] {
    return productos;
  }

}
