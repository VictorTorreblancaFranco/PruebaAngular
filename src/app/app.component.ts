import { Component } from '@angular/core';
import { SidebarComponent } from '../app/layout/sidebar/sidebar/sidebar.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Importar CommonModule si es necesario para ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    CustomerListComponent,
    CustomerFormComponent,
    MatIconModule,
    CommonModule  // Asegúrate de que CommonModule está importado si usas ngIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panaderiaJorgito_FrontEnd';

  // Método para manejar el filtro
  handleFilter(filterValue: string) {
    console.log('Filtro aplicado:', filterValue);
    // Implementa la lógica para filtrar los datos, por ejemplo, filtrando por nombre o estado
  }

  // Método para manejar la búsqueda
  handleSearch(searchTerm: string) {
    console.log('Búsqueda ejecutada:', searchTerm);
    // Implementa la lógica para buscar en los datos según el término de búsqueda
  }

  // Método para reiniciar los filtros
  handleReset() {
    console.log('Filtros reiniciados');
    // Aquí puedes reiniciar cualquier filtro o búsqueda activa
  }
}
