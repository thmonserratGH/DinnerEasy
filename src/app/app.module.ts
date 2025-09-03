// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { BorderErrorDirective } from './directivas/border-error.directive';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { DatosAdminComponent } from './datos-admin/datos-admin.component';
import { RegistRestauranteComponent } from './regist-restaurante/regist-restaurante.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CrearUsuarioComponent,
    PrincipalComponent,
    BorderErrorDirective,
    DatosUsuarioComponent,
    DatosAdminComponent,
    RegistRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
