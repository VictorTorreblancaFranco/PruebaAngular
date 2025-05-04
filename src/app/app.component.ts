import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // FALTA ESTA LÍNEA

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // AGREGA RouterModule AQUÍ
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panaderiaJorgito_FrontEnd';
}
