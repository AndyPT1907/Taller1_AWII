import { Component, inject } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallesjuegos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detallesjuegos.component.html',
  styleUrl: './detallesjuegos.component.css'
})
export class DetallesjuegosComponent {
  id:any
  nombre:any
  precio:any
  url:any
  personas:any
  route = inject(Router)
  ruta = inject(ActivatedRoute)
  servicio = inject(ArticuloService)
  guardar( datos:any ){
    console.log(datos);
    this.servicio.postPersonal(datos.value).subscribe()
    this.route.navigateByUrl("productos")

  }
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.personas = p
    )

    )

  }
}
