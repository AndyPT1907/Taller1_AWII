import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  router = inject(Router)

  email: any;
  password: any;

  

  login() {
    this.servicio.login(this.email, this.password).subscribe(
      success => {
        if (success) {
          if (this.servicio.isAdmin()) {
            this.router.navigate(['/users']);
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          alert('Credenciales incorrectas');
        }
      }
    );
  }
}
