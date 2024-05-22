import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TablaUsuariosComponent } from '../../components/tabla-usuarios/tabla-usuarios.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaUsuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  constructor(private http: HttpClient) { }
  private user = "http://localhost:3000/users"

  getPersonal(): Observable <any>{
    return this.http.get( this.user)
  }
  getPersonalUnico(id: any):Observable<any>{
    return this.http.get( `${this.user}/${id}` )
  }
  ////////////////GUARDAR- POST//////////////
  postPersonal(persona:JSON): Observable<any>{
    return this.http.post(this.user, persona)
  }
  ///////////////Eliminar////////////////////////////////


deletePersonalID(id:any): Observable<any>{
  return this.http.delete(`${this.user}/${id}`)
}
///////////////////EDITAR//////////////////////
putNosotros(persona:any):Observable <any>{
  return this.http.put(`${this.user}/${persona.id}`,persona)
}
}
