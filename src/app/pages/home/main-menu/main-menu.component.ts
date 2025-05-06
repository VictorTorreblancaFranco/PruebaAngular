import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SidebarComponent } from "../../../layout/sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule,
    SidebarComponent
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
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.currentUser()?.name || 'Usuario';
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
