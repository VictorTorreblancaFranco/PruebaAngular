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

  menuCards = signal([
    {
      title: 'Clientes',
      description: 'Gestión completa de clientes',
      icon: 'groups',
      route: '/pages-customer',  // Esta es la ruta que usaremos
      color: '#3f51b5'
    },
    {
      title: 'Pedidos',
      description: 'Gestión de pedidos',
      icon: 'shopping_cart',
      route: '/orders',
      color: '#ff9800'
    }
]);
    // Puedes agregar más tarjetas según necesites

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}