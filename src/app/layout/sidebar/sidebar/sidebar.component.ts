// src/app/layout/sidebar/sidebar.component.ts
import { Component, HostListener, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';  // Asegúrate de importar correctamente el servicio

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isExpanded = false;
  authService = inject(AuthService);  // Inyecta el servicio de autenticación

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isExpanded = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isExpanded = false;
  }

  logout(): void {
    this.authService.logout();  // Llama al logout del servicio
  }

  get isAdmin(): boolean {
    return this.authService.currentUser()?.role === 'admin';  // Verifica si el usuario es admin
  }
}
