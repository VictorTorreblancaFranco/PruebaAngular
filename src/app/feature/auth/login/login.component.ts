import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
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
    MatIconModule
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
  hidePassword = signal(true);

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.errorMessage.set('');  // Resetear el mensaje de error

    const { email, password } = this.credentials();

    // Intentar loguearse
    if (this.authService.login(email, password)) {
      // Redirigir al usuario a la página principal después del login exitoso
      this.router.navigate(['/']);  // Aquí rediriges a la página principal, ajusta la ruta según tu configuración
    } else {
      // Si el login falla, mostrar mensaje de error
      this.errorMessage.set('Credenciales incorrectas. Intenta con: admin@panaderia.com / admin123');
    }

    this.isLoading.set(false);
  }

  togglePasswordVisibility(): void {
    this.hidePassword.update(value => !value);
  }
}
