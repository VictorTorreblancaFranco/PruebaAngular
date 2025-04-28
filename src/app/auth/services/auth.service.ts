import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUser = signal<User | null>(null);

    // Usuarios mock (reemplazar por API real después)
    private mockUsers: User[] = [
        { email: 'admin@panaderia.com', password: '123', role: 'administrador' },
        { email: 'colab@panaderia.com', password: '456', role: 'colaborador' }
    ];

    // 🔵 Método para iniciar sesión
    login(email: string, password: string): boolean {
        const user = this.mockUsers.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser.set(user);
            localStorage.setItem('user', JSON.stringify(user));
            return true;
        }
        return false;
    }

    // 🟢 Método para registrar nuevos usuarios
    register(email: string, password: string, role: 'administrador' | 'colaborador'): boolean {
        const exists = this.mockUsers.some(u => u.email === email);
        if (!exists) {
            const newUser: User = { email, password, role };
            this.mockUsers.push(newUser);
            return true;
        }
        return false; // No permite registro si el email ya existe
    }

    // 🔴 Cerrar sesión
    logout() {
        this.currentUser.set(null);
        localStorage.removeItem('user');
    }

    // 🟡 Obtener usuario actual
    getCurrentUser() {
        return this.currentUser();
    }

    // 🟠 Verificar si el usuario tiene un rol específico
    hasRole(role: 'administrador' | 'colaborador'): boolean {
        return this.currentUser()?.role === role;
    }
}
