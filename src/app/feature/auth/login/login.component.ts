import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressSpinner
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = signal<{ email: string; password: string }>({ email: '', password: '' });
  isLoading = signal(false);
  errorMessage = signal('');
  hidePassword = signal(true);

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.errorMessage.set('');

    setTimeout(() => {
      const { email, password } = this.credentials();

      try {
        if (this.authService.login(email, password)) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage.set('Credenciales incorrectas. Prueba con: admin@panaderia.com / admin123');
        }
      } catch (error) {
        this.errorMessage.set('Error al iniciar sesión. Intenta nuevamente.');
        console.error('Login error:', error);
      } finally {
        this.isLoading.set(false);
      }
    }, 800);
  }

  togglePasswordVisibility(): void {
    this.hidePassword.set(!this.hidePassword());
  }
}