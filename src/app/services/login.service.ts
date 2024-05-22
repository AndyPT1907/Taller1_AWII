import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
    
  
    private baseUrl = 'http://localhost:3000';
    user: any
  
    postUsers(usuario: any): Observable<any>{
      return this.http.post(this.baseUrl, usuario)
  
    }
  
    getRol( role: any): Observable<any>{
      return this.http.get(`${this.baseUrl}/${role}`)
    }
    login(email: string, password: string): Observable<boolean> {
      return this.http.get<{ email: string, password: string, role: string }[]>(`${this.baseUrl}/users`).pipe(
        map(users => {
          console.log('Usuarios desde el servidor:', users);
          return users.find(user => {
            console.log('Evaluando usuario:', user);
            return user.email === email && user.password === password;
          });
        }),
        tap(user => {
          console.log('Usuario encontrado:', user);
          if (user) {
            this.user = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }),
        map(user => {
          console.log('User is undefined?', user === undefined);
          return user !== undefined;
        })
      );
    }
  
    logout() {
      this.user = null;
      localStorage.removeItem('currentUser');
    }
  
    getCurrentUserRole(): string {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      return currentUser.role || '';
    }
  
    isLoggedIn(): boolean {
      return this.user !== null;
    }
  
   
    isAdmin(): boolean {
      return this.user && this.user.role === 'admin';
    }
}
