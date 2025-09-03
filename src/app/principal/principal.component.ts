import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  mensajeExito: string | null = null; // Propiedad para mostrar el mensaje


  constructor(private AuthService: AuthService) {
  }

  ngOnInit(): void {
    // Obtenemos el mensaje del servicio al inicializar el componente
    this.mensajeExito = this.AuthService.getMensajeExito();

    // Verificamos si hay un mensaje para mostrar y si es así,
    // lo ocultamos después de 10 segundos.
    if (this.mensajeExito) {
      setTimeout(() => {
        this.mensajeExito = null; // Esto oculta el mensaje
      }, 10000); // 10000 milisegundos = 10 segundos
    }
  }

}
