import { Component, inject } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule,CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  articulos : any;
  carrito = inject(CarritoService)
  total: number = 0;

  

  ngOnInit(): void {
    this.carrito.getCart().subscribe((data) => {
      this.articulos = data;
      console.log('Cart items:', this.articulos);
      this.calcularTotal();
    });
  }


  
  eliminar(id:any){
    this.carrito.removeFromCart(id).subscribe()
    window.location.reload()
    
  }
  calcularTotal(): void {
    if (Array.isArray(this.articulos)) {
      this.total = this.articulos.reduce((sum, item) => sum + item.precio, 0);
    } else {
      this.total = 0;
    }
    

}

}
