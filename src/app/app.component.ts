import { Component } from '@angular/core';
import { SidebarComponent } from '../app/layout/sidebar/sidebar/sidebar.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    CustomerListComponent,
    CustomerFormComponent,
    ButtonBarComponent,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panaderiaJorgito_FrontEnd'; // Añade esta propiedad

  handleFilter() {
    console.log('Filtro aplicado');
  }

  handleSearch() {
    console.log('Búsqueda ejecutada');
  }

  handleReset() {
    console.log('Filtros reiniciados');
  }
}