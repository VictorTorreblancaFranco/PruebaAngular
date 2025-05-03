// src/app/components/core/login/login.component.ts
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../core/services/auth.service';  // Cambié la ruta aquí para usar 'shared/services'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = signal({
    email: '',
    password: ''
  });
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    setTimeout(() => {
      const { email, password } = this.credentials();
      if (this.authService.login(email, password)) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage.set('Credenciales incorrectas. Prueba con: admin@panaderia.com / admin123');
      }
      this.isLoading.set(false);
    }, 1000);
  }
}
