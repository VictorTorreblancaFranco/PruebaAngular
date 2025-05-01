import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersSubject: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public customers$: Observable<Customer[]> = this.customersSubject.asObservable();

  constructor() {
    // Inicializamos con algunos clientes ficticios
    const initialCustomers: Customer[] = [
      {
        identificador: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        numero_documento: '123456789',
        telefono: '987654321',
        direccion: 'Av. Principal 123',
        fecha_registro: new Date(),
        email: 'juan.perez@email.com',
        estado: true,
        edad: 30
      }
    ];
    this.customersSubject.next(initialCustomers);
  }

  // Obtener todos los clientes
  getCustomers(): Observable<Customer[]> {
    return this.customers$;
  }

  // Agregar un nuevo cliente
  addCustomer(customer: Customer): void {
    const currentCustomers = this.customersSubject.getValue();
    currentCustomers.push(customer);
    this.customersSubject.next(currentCustomers);
  }

  // Eliminar un cliente lógicamente
  deleteCustomer(id: number): void {
    const currentCustomers = this.customersSubject.getValue();
    const customerIndex = currentCustomers.findIndex(c => c.identificador === id);
    if (customerIndex !== -1) {
      currentCustomers[customerIndex].estado = false;  // Eliminación lógica
      this.customersSubject.next(currentCustomers);
    }
  }

  // Editar un cliente
  editCustomer(updatedCustomer: Customer): void {
    const currentCustomers = this.customersSubject.getValue();
    const customerIndex = currentCustomers.findIndex(c => c.identificador === updatedCustomer.identificador);
    if (customerIndex !== -1) {
      currentCustomers[customerIndex] = updatedCustomer;
      this.customersSubject.next(currentCustomers);
    }
  }
}
