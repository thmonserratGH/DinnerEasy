// crear-usuario.component.ts

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent {
  formulario: FormGroup;
  errorMensaje = '';
  mensajeExito = '';

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', Validators.required],
    });
  }

  crearUsuario() {
    // 1. Verificar si el formulario es válido
    if (this.formulario.valid) {
      const nuevoUsuario = this.formulario.value;

      // 2. Llamar al servicio y enviar los datos al backend
      this.authService.crearUsuario(nuevoUsuario).subscribe({
        next: response => {
          // 3. Manejar la respuesta exitosa
          console.log('Usuario creado con éxito en el backend:', response);
          this.mensajeExito = 'El usuario ha sido creado con éxito. Ya puede iniciar sesión';
          this.errorMensaje = ''; // Limpiar cualquier mensaje de error anterior
          
          // Opcional: limpiar el formulario después de la creación exitosa
          // this.formulario.reset(); 
          
          // 4. Navegar a la página de login
          this.router.navigate(['/login']);
        },
        error: err => {
          // 5. Manejar el error
          console.error('Error al crear usuario:', err);
          this.errorMensaje = 'Error al crear usuario. Inténtalo de nuevo más tarde.';
          this.mensajeExito = ''; // Limpiar mensaje de éxito
        }
      });
    } else {
      this.errorMensaje = 'Formulario inválido. Completa todos los campos correctamente';
      this.mensajeExito = ''; // Limpiar mensaje de éxito
    }
  }

  // Puedes eliminar el método usuarioCreado() ya que no se usa.
  // La lógica para mostrar el mensaje de éxito se maneja dentro del método crearUsuario().
}