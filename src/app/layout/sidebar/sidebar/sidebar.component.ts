import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Método para cerrar sesión
  logout() {
    console.log('Cerrando sesión...');
    // Aquí iría la lógica real para cerrar sesión
    // Ejemplo: this.authService.logout();
    // Y redirección: this.router.navigate(['/login']);
  }

  // Recomendación: Añadir método para verificar rol de usuario
  get isAdmin(): boolean {
    // Lógica para verificar si es administrador
    return true; // Ejemplo
  }
}