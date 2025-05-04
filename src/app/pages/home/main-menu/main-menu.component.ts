import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  userName = computed(() => this.authService.currentUser()?.name || 'Usuario');
  isLoading = signal(true);
  
  // Datos de ejemplo para las tarjetas
  menuCards = signal([
    {
      title: 'Clientes',
      description: 'Gestión de clientes',
      icon: 'groups',
      route: '/customer-list',
      color: '#3f51b5'
    },
    {
      title: 'Nuevo Cliente',
      description: 'Agregar nuevo cliente',
      icon: 'person_add',
      route: '/customer-form',
      color: '#4caf50'
    },
    {
      title: 'Reportes',
      description: 'Ver reportes de ventas',
      icon: 'assessment',
      route: '/reports',
      color: '#ff9800'
    }
  ]);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Simulamos carga de datos
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}