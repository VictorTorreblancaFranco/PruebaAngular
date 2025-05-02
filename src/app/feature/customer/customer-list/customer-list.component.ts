import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { SearchFilterComponent } from '../../../components/search-filter/search-filter.component';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    SearchFilterComponent
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customers = [
    {
      identificador: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      telefono: '987654321',
      estado: true
    },
    {
      identificador: 2,
      nombre: 'María',
      apellido: 'Gonzalez',
      telefono: '987654322',
      estado: false
    }
    // Puedes agregar más clientes aquí...
  ];

  filteredCustomers = [...this.customers];
  searchTerm = '';
  filterValue = '';

  trackByIdentificador(index: number, customer: any): number {
    return customer.identificador;
  }

  // Función para manejar la búsqueda
  handleSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.filteredCustomers = this.customers.filter(c => 
      c.nombre.toLowerCase().includes(this.searchTerm) || 
      c.apellido.toLowerCase().includes(this.searchTerm) ||
      c.telefono.includes(this.searchTerm)
    );
  }

  // Función para manejar filtros
  handleFilter(filterValue: string): void {
    this.filterValue = filterValue;

    if (this.filterValue === 'activo') {
      this.filteredCustomers = this.customers.filter(c => c.estado === true);
    } else if (this.filterValue === 'inactivo') {
      this.filteredCustomers = this.customers.filter(c => c.estado === false);
    } else {
      this.filteredCustomers = [...this.customers]; // Restablecer si el filtro es "todos"
    }
  }

  // Función para limpiar la búsqueda
  handleClear(): void {
    this.searchTerm = '';
    this.filteredCustomers = [...this.customers];
  }

  // Función para ver detalles de un cliente
  viewDetails(customer: any): void {
    console.log('Ver detalles de:', customer);
  }

  // Función para editar un cliente
  editCustomer(customer: any): void {
    console.log('Editar:', customer);
  }

  // Función para eliminar un cliente
  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.identificador !== id);
    this.filteredCustomers = this.filteredCustomers.filter(c => c.identificador !== id);
  }
}
