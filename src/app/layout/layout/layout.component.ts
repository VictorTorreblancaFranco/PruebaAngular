// src/app/layout/layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para 'router-outlet'
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';  // Importa SidebarComponent desde la ruta correcta

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',  // Ruta correcta a tu archivo de plantilla
  styleUrls: ['./layout.component.scss'],
  standalone: true,  // Este es un componente standalone
  imports: [CommonModule, SidebarComponent]  // Asegúrate de agregar CommonModule y SidebarComponent a imports
})
export class LayoutComponent {
  // Lógica opcional para tu layout
}
