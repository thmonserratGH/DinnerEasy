import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Propiedades del componente
  formularioLogin: FormGroup;
  errorMensaje = '';
  mensajeExito: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Renombrado a minúscula por convención (authService)
  ) {
    // Inicialización del formulario reactivo
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // El nombre 'contrasena' debe coincidir con el backend y el formControlName en el HTML
      contrasena: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Esta lógica permite mostrar un mensaje de éxito si venimos desde el registro
    this.mensajeExito = this.authService.getMensajeExito();

    if (this.mensajeExito) {
      setTimeout(() => {
        this.mensajeExito = null; // Oculta el mensaje después de 10 segundos
      }, 10000);
    }
  }

  /**
   * Método que se ejecuta al enviar el formulario de login.
   * Ahora se conecta al backend a través del AuthService.
   */
  iniciarSesion(): void {
    // 1. Verificamos que los campos del formulario cumplan las validaciones (required, email, etc.)
    if (this.formularioLogin.valid) {
      // 2. Obtenemos los datos del formulario (email y contrasena)
      const credenciales = this.formularioLogin.value;

      // 3. Llamamos al servicio de autenticación, que se encargará de contactar al backend.
      this.authService.iniciarSesion(credenciales).subscribe({
        
        // 4. 'next' se ejecuta si el backend responde con éxito (HTTP 200 OK)
        next: (usuarioLogueado) => {
          console.log('Login exitoso. Usuario recibido:', usuarioLogueado);
          this.errorMensaje = ''; // Limpiamos cualquier error previo

          // 5. Guardamos los datos del usuario en localStorage para mantener la sesión activa
          localStorage.setItem('usuarioActivo', JSON.stringify(usuarioLogueado));

          // 6. Redirigimos al usuario a la página principal
          this.router.navigate(['']);
        },

        // 7. 'error' se ejecuta si el backend responde con un error (HTTP 401, 500, etc.)
        error: (err) => {
          console.error('Error durante el inicio de sesión:', err);
          this.errorMensaje = 'Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.';
        }
      });

    } else {
      // Si el formulario no es válido, mostramos un mensaje al usuario.
      this.errorMensaje = 'Por favor, ingrese un correo y una contraseña válidos.';
    }
  }
}
