import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  id:any
  email:any
  password:any
  role:any
 
  

users:any

servicio = inject(UsersService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
   this.route.navigateByUrl("usuarios")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idUser']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.users= e
     })
 
 
    })
   }
}
