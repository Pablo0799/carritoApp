import { Component } from '@angular/core';
import { CarritoAppComponent } from "./components/carrito-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarritoAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CarritoApp';
}
