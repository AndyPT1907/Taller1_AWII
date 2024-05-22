import { Component, inject } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ArticuloService)
  carrito = inject(CarritoService)

  articulos : any;

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
  addToCart(articulos: any): void {
    this.carrito.addToCart(articulos).subscribe();
  }

}
