import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';  // Agregado para mat-icon-button
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,  // Asegúrate de agregarlo aquí
    RouterModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  userName: string = '';  // Inicializa con un valor vacío o predeterminado
  isLoading: boolean = true;

  menuCards = [
    {
      title: 'Clientes',
      description: 'Gestión completa de clientes',
      icon: 'groups',
      route: '/pages-customer',
      color: '#3f51b5'
    },
    {
      title: 'Pedidos',
      description: 'Gestión de pedidos',
      icon: 'shopping_cart',
      route: '/orders',
      color: '#ff9800'
    },
    {
      title: 'Productos',
      description: 'Gestión de productos',
      icon: 'store',
      route: '/productos',
      color: '#4caf50'
    },
    {
      title: 'Ventas',
      description: 'Gestión de ventas',
      icon: 'attach_money',
      route: '/ventas',
      color: '#2196f3'
    },
    {
      title: 'Reportes',
      description: 'Ver reportes de ventas',
      icon: 'assessment',
      route: '/reportes',
      color: '#e91e63'
    },
    {
      title: 'Inventario',
      description: 'Gestionar inventarios',
      icon: 'inventory',
      route: '/inventario',
      color: '#9c27b0'
    },
    {
      title: 'Proveedores',
      description: 'Gestionar proveedores',
      icon: 'people',
      route: '/proveedores',
      color: '#ff5722'
    },
    {
      title: 'Usuarios',
      description: 'Gestionar usuarios',
      icon: 'group',
      route: '/usuarios',
      color: '#8bc34a'
    },
    {
      title: 'Configuración',
      description: 'Configuración del sistema',
      icon: 'settings',
      route: '/configuracion',
      color: '#ffeb3b'
    },
    {
      title: 'Estadísticas',
      description: 'Ver estadísticas de ventas',
      icon: 'trending_up',
      route: '/estadisticas',
      color: '#9e9e9e'
    }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Obtener el nombre del usuario desde el servicio AuthService
    this.userName = this.authService.currentUser()?.name || 'Usuario';
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  // Método de Cerrar Sesión
  logout(): void {
    this.authService.logout(); // Llama al método logout del servicio
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
