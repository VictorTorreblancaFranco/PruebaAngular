import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = signal<User | null>(null);
  currentUser = this._currentUser.asReadonly();

  constructor(private router: Router) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
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
    localStorage.setItem('panaderia_user', JSON.stringify(user));
  }

  private clearUser(): void {
    localStorage.removeItem('panaderia_user');
    this._currentUser.set(null);
  }

  login(email: string, password: string): boolean {
    // Simulación de autenticación - reemplazar con llamada real a API
    if (email === 'admin@panaderia.com' && password === 'admin123') {
      const user: User = {
        id: 1,
        name: 'Administrador',
        email: email,
        role: 'admin',
        avatar: 'assets/images/admin-avatar.png'
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

  isAuthenticated(): boolean {
    return this._currentUser() !== null;
  }

  hasRole(role: string): boolean {
    return this._currentUser()?.role === role;
  }
}