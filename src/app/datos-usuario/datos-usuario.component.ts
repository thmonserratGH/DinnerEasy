import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  usuario: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    // Obtenemos los datos del usuario activo usando el servicio
    this.usuario = this.authService.getUsuarioActivo();
    
    // Puedes agregar una validación por si acaso no hay usuario
    if (this.usuario) {
      console.log('Datos del usuario activo:', this.usuario);
    } 
    else {
      console.log('No hay usuario activo.');
    }
  }

}
