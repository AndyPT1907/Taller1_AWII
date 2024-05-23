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
  subtotal: number = 0;
  cartItems: any[] = [];
  products: any[] = [];
  total : number = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }


  
  eliminar(id:any){
    this.carrito.removeFromCart(id).subscribe()
    window.location.reload()
    
  }
  loadCartItems(): void {
    this.carrito.getCart().subscribe((data) => {
      this.articulos = data;
      this.calculateTotal();
    });
  }

  updateQuantity(product: any, change: number): void {
    product.quantity += change;
    if (product.quantity <= 0) {
      this.removeFromCart(product.id);
    } else {
      this.carrito.updateCartItem(product).subscribe(() => {
        this.loadCartItems();
      });
    }
  }

  removeFromCart(id: number): void {
    this.carrito.removeFromCart(id).subscribe(() => {
      this.loadCartItems();
    });
  }

  iva : number=0;
  

  calculateTotal(): void {
    if (Array.isArray(this.articulos)) {
      this.subtotal = this.articulos.reduce((sum, item) => sum + item.precio * item.quantity, 0);
      this.iva = this.subtotal * 0.12
      this.total = this.subtotal + this.iva;
    } else {
      this.subtotal = 0;
    }
  }

}
