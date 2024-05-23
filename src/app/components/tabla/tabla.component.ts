import { Component, inject } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,FormsModule,CurrencyPipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ArticuloService)
  carrito = inject(CarritoService)
  cartItems: any[] = [];
  total: number = 0;
  articulos : any;
  products: any[] = [];

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.articulos = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  Preciomin = 0
  
  Preciomax = 500
  
 
 

  
  addToCart(product: any, quantity: number): void {
    this.carrito.getCart().subscribe(cartItems => {
      const existingProduct = cartItems.find((item: any) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
        this.carrito.updateCartItem(existingProduct).subscribe();
        alert("El producto a sido agregado correctamente")
      } else {
        const productToAdd = { ...product, quantity: quantity };
        this.carrito.addToCart(productToAdd).subscribe();
      }
    });
  }
  
}
