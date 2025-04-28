import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Requerido para ngModel
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule], // Añade FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Extensión SCSS
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    }
  }
}