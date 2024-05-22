import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesjuegosComponent } from './pages/detallesjuegos/detallesjuegos.component';
import { EditarComponent } from './pages/editar/editar.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { Error403Component } from './pages/error403/error403.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'juegos-detalles', component: DetallesjuegosComponent, canActivate: [authGuard], data: { roles: ['admin'] } },
    { path: 'contactos', component: ContactosComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'editar-detalles/:idJuegos', component: EditarComponent, canActivate: [authGuard], data: { roles: ['admin'] } },
    { path: 'cart', component: CarritoComponent, canActivate: [authGuard], data: { roles: ['user', 'admin'] } },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsuariosComponent, canActivate: [authGuard], data: { roles: ['admin'] } },
    { path: 'editar-user/:idUser', component: EditarUsuarioComponent, canActivate: [authGuard], data: { roles: ['admin'] } },
    { path: 'noauth', component: Error403Component },
    { path: '**', component: Error404Component }
    


];
