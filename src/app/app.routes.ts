import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesjuegosComponent } from './pages/detallesjuegos/detallesjuegos.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'productos',component:ProductosComponent},
    { path: 'juegos-detalles', component: DetallesjuegosComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'ofertas',component:OfertasComponent},
    { path: 'editar-detalles/:idJuegos', component: EditarComponent},

    {path:'**',component:Error404Component},
    


];
