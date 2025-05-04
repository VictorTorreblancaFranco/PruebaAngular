import { Injectable, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

// Definimos los roles válidos como constante
const USER_ROLES = ['admin', 'panadero', 'cajero', 'cliente'] as const;
type UserRole = typeof USER_ROLES[number]; // 'admin' | 'panadero' | 'cajero' | 'cliente'

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'panaderia_user';
  private readonly isBrowser: boolean;

  private _currentUser = signal<User | null>(null);
  currentUser = computed(() => this._currentUser());
  isAuthenticated = computed(() => !!this._currentUser());

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadUserFromStorage();
  }

  login(email: string, password: string): boolean {
    // Usamos aserción de tipo para garantizar que los roles son válidos
    const users: { email: string, password: string, role: UserRole }[] = [
      { email: 'admin@panaderia.com', password: 'admin123', role: 'admin' },
      { email: 'panadero@panaderia.com', password: 'pan123', role: 'panadero' },
      { email: 'cajero@panaderia.com', password: 'caja123', role: 'cajero' },
      { email: 'cliente@panaderia.com', password: 'cliente123', role: 'cliente' }
    ];

    const userFound = users.find(u => u.email === email && u.password === password);

    if (userFound) {
      const user: User = {
        id: Date.now(),
        name: email.split('@')[0],
        email: email,
        role: userFound.role // Aquí aseguramos que el tipo sea UserRole
      };

      this._currentUser.set(user);
      this.saveUserToStorage(user);
      this.router.navigate(['/']);
      return true;
    }

    return false;
  }

  logout(): void {
    this._currentUser.set(null);
    this.clearUserFromStorage();
    this.router.navigate(['/login']);
  }

  hasRole(role: UserRole): boolean {
    return this._currentUser()?.role === role;
  }

  private loadUserFromStorage(): void {
    if (!this.isBrowser) return;

    const userData = localStorage.getItem(this.AUTH_KEY);
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        // Verificamos que el rol almacenado sea válido
        if (USER_ROLES.includes(parsedUser.role)) {
          this._currentUser.set(parsedUser);
        } else {
          this.clearUserFromStorage();
        }
      } catch {
        this.clearUserFromStorage();
      }
    }
  }

  private saveUserToStorage(user: User): void {
    if (this.isBrowser) {
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(user));
    }
  }

  private clearUserFromStorage(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.AUTH_KEY);
    }
  }
}