import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
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
    // ... más clientes
  ];

  viewDetails(customer: any) {
    console.log('Ver detalles de:', customer);
  }

  editCustomer(customer: any) {
    console.log('Editar:', customer);
  }

  deleteCustomer(id: number) {
    console.log('Eliminar ID:', id);
  }
}