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
      title: 'Añadir Proveedor',
      description: 'Registrar un nuevo proveedor',
      icon: 'local_shipping',  // El icono 'local_shipping' representa el envío y proveedores
      route: '/añadir-proveedor',
      color: '#e91e63'  // Rosa fuerte, que es vibrante y dinámico
    },
    {
      title: 'Estadísticas',
      description: 'Ver estadísticas de ventas',
      icon: 'trending_up',
      route: '/estadisticas',
      color: '#9e9e9e'
    },
    {
      title: 'Colaboradores',
      description: 'Ver colaboradores',
      icon: 'group',
      route: '/colaboradores',
      color: '#3e9e5e'
    },
    {
      title: 'Registrar Factura',
      description: 'Añadir una nueva factura de venta',
      icon: 'receipt',  // Usé el icono 'receipt' para representar una factura
      route: '/registrar-factura',
      color: '#3f51b5'  // Un azul que indica seriedad y confianza
    },
    {
      title: 'Recetas y Costos de Producción',
      description: 'Gestionar las recetas y calcular los costos de producción',
      icon: 'kitchen',  // El icono 'kitchen' representa cocina y recetas
      route: '/recetas-costos',
      color: '#ff9800'  // Naranja brillante que representa creatividad y energía
    },
    {
      title: 'Calendario de Pedidos',
      description: 'Ver y gestionar los pedidos según las fechas',
      icon: 'calendar_today',  // El icono 'calendar_today' representa el calendario
      route: '/calendario-pedidos',
      color: '#9c27b0'  // Púrpura, asociado con la planificación y organización
    },
    {
      title: 'Gestión de Pagos',
      description: 'Registrar y gestionar pagos de ventas realizadas',
      icon: 'payment',  // El icono 'payment' representa pagos
      route: '/gestionar-pagos',
      color: '#4caf50'  // Verde para indicar acción
    },
    {
      title: 'Devoluciones',
      description: 'Gestionar devoluciones de productos',
      icon: 'undo',  // El icono 'undo' es adecuado para representar devoluciones
      route: '/devoluciones',
      color: '#e91e63'  // Rosa para acciones que se deben realizar con precaución
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
