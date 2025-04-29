import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true, // <-- ¡Nuevo en Angular 17+!
  imports: [CommonModule, KeyValuePipe], // <-- Módulos/pipe necesarios
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Datos del dashboard (puedes cambiarlos por llamadas a servicios)
  metrics = {
    totalSales: 1250,
    activeUsers: 58,
    newOrders: 24,
    revenue: '$12,450'
  };

  recentOrders = [
    { id: '#001', customer: 'Cliente A', amount: '$120' },
    { id: '#002', customer: 'Cliente B', amount: '$85' }
  ];
}