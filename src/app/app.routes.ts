import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarroComponent } from './pages/carro/carro.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GestioComponent } from './pages/gestio/gestio.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesAutosComponent } from './pages/detalles-autos/detalles-autos.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'autos',component:CarroComponent},
    {path:'empleados',component:EmpleadosComponent},
    {path:'gestion',component:GestioComponent},
    { path: 'detalles/:idCarros', component: DetallesAutosComponent},
    { path: 'editar/:idCarros', component: EditarComponent},

    {path:'**',component:Error404Component},


];
