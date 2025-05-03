// src/app/core/services/auth.service.ts
import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user'; // Importando el modelo de usuario
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = signal<User | null>(null);
  currentUser = computed(() => this._currentUser());  // Computed property para acceder al usuario actual

  private readonly isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadUserFromStorage(); // Cargar el usuario si está almacenado en localStorage
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this._currentUser() !== null;
  }

  private loadUserFromStorage(): void {
    if (!this.isBrowser) return;

    const savedUser = localStorage.getItem('panaderia_user');
    if (savedUser) {
      try {
        this._currentUser.set(JSON.parse(savedUser));
      } catch {
        this.clearUser();
      }
    }
  }

  private saveUserToStorage(user: User): void {
    if (this.isBrowser) {
      localStorage.setItem('panaderia_user', JSON.stringify(user));
    }
  }

  private clearUser(): void {
    this._currentUser.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('panaderia_user');
    }
  }

  login(email: string, password: string): boolean {
    // Credenciales de prueba (simuladas)
    const testUsers = [
      { email: 'admin@panaderia.com', password: 'admin123', role: 'admin' },
      { email: 'panadero@panaderia.com', password: 'pan123', role: 'panadero' },
      { email: 'cajero@panaderia.com', password: 'caja123', role: 'cajero' },
      { email: 'cliente@panaderia.com', password: 'cliente123', role: 'cliente' }
    ];

    const validUser = testUsers.find(user =>
      user.email === email && user.password === password
    );

    if (validUser) {
      const user: User = {
        id: Date.now(), // Usamos un identificador único para el usuario
        name: email.split('@')[0],  // Extraemos el nombre de usuario a partir del email
        email: email,
        role: validUser.role as 'admin' | 'panadero' | 'cajero' | 'cliente'  // Aseguramos que el tipo sea uno de los roles definidos
      };

      this._currentUser.set(user);
      this.saveUserToStorage(user);
      return true;
    }

    return false;
  }

  logout(): void {
    this.clearUser();
    this.router.navigate(['/login']);
  }
}
