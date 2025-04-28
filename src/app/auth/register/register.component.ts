import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service'; // Asegúrate de que la ruta esté correcta

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // Variables de formulario
  fullName = '';
  email = '';
  dni = '';
  address = '';
  phone = '';
  phoneOptional = '';
  emergencyContact = '';
  role: 'administrador' | 'colaborador' | '' = '';
  position = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onRoleChange() {
    if (this.role !== 'colaborador') {
      this.position = ''; // Limpia la posición si no es colaborador
    }
  }

  onRegister() {
    if (!this.email || !this.password || !this.role || !this.fullName || !this.dni || !this.address || !this.phone || !this.emergencyContact) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const success = this.authService.register(this.email, this.password, this.role);

    if (success) {
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      this.router.navigate(['/auth/login']);
    } else {
      alert('Ya existe un usuario registrado con este correo.');
    }

    // Aquí opcionalmente puedes también guardar los otros datos en tu backend
    // Si más adelante conectas a API real, aquí enviarías todo el objeto.
  }
}
