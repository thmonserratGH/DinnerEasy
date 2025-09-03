import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL base de la API en el backend
  private backendUrl = 'http://localhost:8080/api/usuarios';

  // Propiedad para comunicar mensajes entre componentes (ej. del registro al login)
  private mensajeExito: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}


  // --- MÉTODOS DE CONEXIÓN CON EL BACKEND ---

  /**
   * Envía las credenciales al backend para validar el inicio de sesión.
   * @param credenciales Objeto con email y contrasena.
   */
  iniciarSesion(credenciales: any): Observable<any> {
    // La URL debe coincidir exactamente con el @PostMapping del Controller en Spring Boot
    const url = `${this.backendUrl}/login`;
    return this.http.post(url, credenciales);
  }

  /**
   * Envía los datos de un nuevo usuario al backend para su registro.
   * @param datosUsuario Objeto con los datos del nuevo usuario.
   */
  crearUsuario(datosUsuario: any): Observable<any> {
    const url = `${this.backendUrl}/crear`;
    return this.http.post(url, datosUsuario);
  }


  // --- MÉTODOS DE GESTIÓN DE SESIÓN EN EL FRONTEND ---

  /**
   * Cierra la sesión del usuario activo.
   */
  cerrarSesion(): void {
    localStorage.removeItem('usuarioActivo'); // Elimina al usuario del almacenamiento
    this.router.navigate(['/login']);       // Redirige a la página de login
  }

  /**
   * Obtiene los datos del usuario logueado desde localStorage.
   * @returns El objeto del usuario o null si no hay nadie logueado.
   */
  getUsuarioActivo(): any | null {
    const usuarioString = localStorage.getItem('usuarioActivo');
    if (!usuarioString) {
      return null;
    }
    return JSON.parse(usuarioString);
  }

  /**
   * Verifica si hay una sesión activa.
   * @returns true si hay un usuario logueado, false en caso contrario.
   */
  isLoggedIn(): boolean {
    return this.getUsuarioActivo() !== null;
  }

  /**
   * Verifica si el usuario activo tiene el rol de 'admin'.
   */
  esAdmin(): boolean {
    const usuario = this.getUsuarioActivo();
    return usuario?.tipo === 'admin';
  }

  /**
   * Verifica si el usuario activo tiene el rol de 'cliente'.
   */
  esCliente(): boolean {
    const usuario = this.getUsuarioActivo();
    return usuario?.tipo === 'cliente';
  }


  // --- MÉTODOS PARA MENSAJES ENTRE COMPONENTES ---

  setMensajeExito(mensaje: string): void {
    this.mensajeExito = mensaje;
  }

  getMensajeExito(): string | null {
    const mensaje = this.mensajeExito;
    this.mensajeExito = null; // Se limpia después de leerlo para mostrarlo una sola vez
    return mensaje;
  }
}
