import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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
