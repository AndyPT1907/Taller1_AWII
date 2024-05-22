import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiCarrito = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  

  addToCart(articulos: any): Observable<any> {
    return this.http.post(`${this.apiCarrito}/carrito`, articulos);
  }
  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiCarrito}/carrito`);
  }
  removeFromCart(id: number): Observable<any> {
    return this.http.delete(`${this.apiCarrito}/carrito/${id}`);
  }
  
}
