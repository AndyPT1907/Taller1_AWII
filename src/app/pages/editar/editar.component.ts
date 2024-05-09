import { Component, inject } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  id:any
  nombre:any
  precio:any
  url:any
  

personal:any

servicio = inject(ArticuloService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("productos")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idJuegos']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.personal= e
     })
 
 
    })
   }
}
