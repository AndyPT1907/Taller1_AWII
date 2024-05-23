import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  servicio = inject(LoginService);
  cerrar(){
    localStorage.removeItem('currentUser')
    //localStorage.setItem("token",'false')
    localStorage.removeItem('token')
    window.location.href='login'
  }
}
