import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../app/layout/sidebar/sidebar/sidebar.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthService } from '../app/core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    CustomerListComponent,
    CustomerFormComponent,
    LoginComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panaderiaJorgito_FrontEnd';
  authService = inject(AuthService);

  handleFilter(filterValue: string) {
    console.log('Filtro aplicado:', filterValue);
  }

  handleSearch(searchTerm: string) {
    console.log('Búsqueda ejecutada:', searchTerm);
  }

  handleReset() {
    console.log('Filtros reiniciados');
  }
}