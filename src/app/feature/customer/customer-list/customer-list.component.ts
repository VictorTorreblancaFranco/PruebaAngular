import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { SearchFilterComponent } from '../../../components/search-filter/search-filter.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../../../core/services/customer.service';

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
  ];

  filteredCustomers = [...this.customers];
  searchTerm = '';
  filterValue = '';

  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService
  ) {}

  trackByIdentificador(index: number, customer: any): number {
    return customer.identificador;
  }

  handleSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.filteredCustomers = this.customers.filter(c => 
      c.nombre.toLowerCase().includes(this.searchTerm) || 
      c.apellido.toLowerCase().includes(this.searchTerm) ||
      c.telefono.includes(this.searchTerm)
    );
  }

  handleFilter(filterValue: string): void {
    this.filterValue = filterValue;
    if (this.filterValue === 'activo') {
      this.filteredCustomers = this.customers.filter(c => c.estado);
    } else if (this.filterValue === 'inactivo') {
      this.filteredCustomers = this.customers.filter(c => !c.estado);
    } else {
      this.filteredCustomers = [...this.customers];
    }
  }

  handleClear(): void {
    this.searchTerm = '';
    this.filterValue = '';
    this.filteredCustomers = [...this.customers];
  }

  openDetailsDialog(customerId: number): void {
    const customer = this.customers.find(c => c.identificador === customerId);
    if (customer) {
      this.dialog.open(CustomerDetailsComponent, {
        width: '800px',
        data: customer
      });
    }
  }

  deleteCustomer(id: number): void {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.customerService.softDeleteCustomer(id).subscribe(() => {
        this.customers = this.customers.filter(c => c.identificador !== id);
        this.filteredCustomers = this.filteredCustomers.filter(c => c.identificador !== id);
      });
    }
  }   
}