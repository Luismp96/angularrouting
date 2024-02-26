import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//SE AÑADEN RUTAS
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [

  //SE AÑADEN RUTAS
  //INICIO
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'blog',component:BlogComponent
  },
  {
    path:'sobremi',component:SobremiComponent
  },
  {
    path:'contacto',component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
