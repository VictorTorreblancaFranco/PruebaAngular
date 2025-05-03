// src/app/shared/services/auth.service.ts
import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user'; // Cambié la importación aquí para usar el modelo de usuario
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = signal<User | null>(null);
  currentUser = computed(() => this._currentUser());

  private readonly isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object // Inyecta la plataforma para diferenciar entre navegador y servidor
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadUserFromStorage();
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this._currentUser() !== null;
  }

  private loadUserFromStorage(): void {
    if (!this.isBrowser) return; // Solo ejecuta en el navegador

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
    // Credenciales de prueba - reemplaza con tu lógica real
    if (email === 'admin@panaderia.com' && password === 'admin123') {
      const user: User = {
        id: 1,
        name: 'Administrador',
        email: email,
        role: 'admin'
      };
      this._currentUser.set(user);
      this.saveUserToStorage(user);
      return true;
    }

    // Puedes agregar aquí más usuarios de prueba
    const testUsers = [
      { email: 'panadero@panaderia.com', password: 'pan123', role: 'employee' },
      { email: 'cajero@panaderia.com', password: 'caja123', role: 'cashier' }
    ];

    const validUser = testUsers.find(user =>
      user.email === email && user.password === password
    );

    if (validUser) {
      const user: User = {
        id: Date.now(), // Usa un identificador único
        name: email.split('@')[0],
        email: email,
        role: validUser.role
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
