import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { RegistRestauranteComponent } from './regist-restaurante/regist-restaurante.component';
 

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'crearUsuario', component: CrearUsuarioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: DatosUsuarioComponent},
    { path: 'registRestaurante', component: RegistRestauranteComponent}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}