import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-access-denegado',
  standalone: true,
  imports: [CommonModule, RouterModule], // RouterModule para botones de navegación
  templateUrl: './access-denegado.component.html',
  styleUrls: ['./access-denegado.component.scss']
})
export class AccessDenegadoComponent {
  // Opcional: Mensaje personalizable
  mensaje = 'No tienes permisos para acceder a esta página';
}