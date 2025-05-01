import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ButtonBarComponent } from '../../../components/button-bar/button-bar.component';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    ButtonBarComponent
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  // Datos iniciales de clientes
  customers = [
    {
      identificador: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '987654321',
      email: 'juan.perez@email.com',
      direccion: 'Calle Falsa 123',
      edad: 30,
      estado: true
    },
    {
      identificador: 2,
      nombre: 'María',
      apellido: 'Gonzalez',
      telefono: '987654322',
      email: 'maria.gonzalez@email.com',
      direccion: 'Avenida Principal 456',
      edad: 25,
      estado: false
    }
    // Puedes agregar más clientes aquí...
  ];

  // Lista filtrada que se muestra
  filteredCustomers = [...this.customers];
  searchTerm = '';  // Término de búsqueda

  // Función trackBy para mejor rendimiento
  trackByIdentificador(index: number, customer: any): number {
    return customer.identificador;
  }

  // Función para manejar la búsqueda
  handleSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.filteredCustomers = this.customers.filter(c => 
      c.nombre.toLowerCase().includes(this.searchTerm) || 
      c.apellido.toLowerCase().includes(this.searchTerm) ||
      c.telefono.includes(this.searchTerm) || 
      c.email.toLowerCase().includes(this.searchTerm)
    );
  }

  // Función para manejar filtros (puedes expandir esta funcionalidad)
  handleFilter(): void {
    console.log('Filtro avanzado activado');
    // Implementar la lógica de filtrado avanzado aquí
    // Por ejemplo, puedes filtrar por el estado (activo/inactivo)
    this.filteredCustomers = this.customers.filter(c => 
      c.estado === true // Este es solo un ejemplo, puedes agregar más filtros
    );
  }

  // Función para limpiar la búsqueda
  handleClear(): void {
    this.searchTerm = '';
    this.filteredCustomers = [...this.customers];
  }

  // Función para ver detalles de un cliente
  viewDetails(customer: any): void {
    console.log('Ver detalles de:', customer);
    // Aquí puedes redirigir o mostrar un modal con más detalles
  }

  // Función para editar un cliente
  editCustomer(customer: any): void {
    console.log('Editar:', customer);
    // Aquí puedes abrir un formulario para editar el cliente
  }

  // Función para eliminar un cliente
  deleteCustomer(id: number): void {
    console.log('Eliminar cliente con ID:', id);
    this.customers = this.customers.filter(c => c.identificador !== id);
    this.filteredCustomers = this.filteredCustomers.filter(c => c.identificador !== id);
  }
}
