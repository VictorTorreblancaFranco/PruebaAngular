import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router'; // Añade RouterOutlet

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    RouterModule,  // Añade RouterModule
    RouterOutlet   // Añade RouterOutlet explícitamente
  ]
})
export class LayoutComponent {
  // Lógica del componente
}