import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { BehaviorSubject, Observable, map, distinctUntilChanged, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersSubject = new BehaviorSubject<Customer[]>([]);
  private customers$ = this.customersSubject.asObservable().pipe(
    shareReplay(1)
  );

  // Public observables
  activeCustomers$ = this.getActiveCustomers();
  inactiveCustomers$ = this.getInactiveCustomers();

  constructor() {
    this.seedInitialData();
  }

  /* ========== CRUD Operations ========== */

  createCustomer(customerData: Omit<Customer, 'identificador' | 'fecha_registro' | 'estado'>): Observable<Customer> {
    return new Observable(subscriber => {
      const newCustomer: Customer = {
        ...customerData,
        identificador: this.generateId(),
        fecha_registro: new Date(),
        estado: true
      };

      this.addCustomerToState(newCustomer);
      subscriber.next(newCustomer);
      subscriber.complete();
    });
  }

  updateCustomer(updatedCustomer: Customer): Observable<Customer> {
    return new Observable(subscriber => {
      this.modifyCustomerState(updatedCustomer);
      subscriber.next(updatedCustomer);
      subscriber.complete();
    });
  }

  softDeleteCustomer(id: number): Observable<Customer> {
    return new Observable(subscriber => {
      const customer = this.customersSubject.getValue().find(c => c.identificador === id);
      if (customer) {
        const updatedCustomer = { ...customer, estado: false };
        this.modifyCustomerState(updatedCustomer);
        subscriber.next(updatedCustomer);
      }
      subscriber.complete();
    });
  }

  restoreCustomer(id: number): Observable<Customer> {
    return new Observable(subscriber => {
      const customer = this.customersSubject.getValue().find(c => c.identificador === id);
      if (customer) {
        const updatedCustomer = { ...customer, estado: true };
        this.modifyCustomerState(updatedCustomer);
        subscriber.next(updatedCustomer);
      }
      subscriber.complete();
    });
  }

  hardDeleteCustomer(id: number): Observable<boolean> {
    return new Observable(subscriber => {
      this.removeCustomerFromState(id);
      subscriber.next(true);
      subscriber.complete();
    });
  }

  /* ========== Query Methods ========== */

  getCustomerById(id: number): Observable<Customer | undefined> {
    return this.customers$.pipe(
      map(customers => customers.find(c => c.identificador === id)),
      distinctUntilChanged()
    );
  }

  getActiveCustomers(): Observable<Customer[]> {
    return this.customers$.pipe(
      map(customers => customers.filter(c => c.estado)),
      distinctUntilChanged()
    );
  }

  getInactiveCustomers(): Observable<Customer[]> {
    return this.customers$.pipe(
      map(customers => customers.filter(c => !c.estado)),
      distinctUntilChanged()
    );
  }

  /* ========== Private Helpers ========== */

  private seedInitialData(): void {
    const initialCustomers: Customer[] = [
      this.createCustomerMock('Juan', 'Perez', '123456789'),
      this.createCustomerMock('María', 'Gonzalez', '987654321'),
      this.createCustomerMock('Carlos', 'Lopez', '456789123', false)
    ];
    this.customersSubject.next(initialCustomers);
  }

  private createCustomerMock(
    nombre: string,
    apellido: string,
    doc: string,
    estado: boolean = true
  ): Customer {
    return {
      identificador: this.generateId(),
      nombre,
      apellido,
      numero_documento: doc,
      telefono: '9'.repeat(9),
      direccion: `${nombre}'s Address`,
      fecha_registro: new Date(),
      email: `${nombre.toLowerCase()}.${apellido.toLowerCase()}@email.com`,
      estado,
      edad: 25 + Math.floor(Math.random() * 20)
    };
  }

  private generateId(): number {
    const customers = this.customersSubject.getValue();
    return customers.reduce((max, c) => Math.max(max, c.identificador), 0) + 1;
  }

  private addCustomerToState(customer: Customer): void {
    const current = this.customersSubject.getValue();
    this.customersSubject.next([...current, customer]);
  }

  private modifyCustomerState(update: Customer): void {
    const current = this.customersSubject.getValue();
    const updated = current.map(c =>
      c.identificador === update.identificador ? { ...c, ...update } : c
    );
    this.customersSubject.next(updated);
  }

  private removeCustomerFromState(id: number): void {
    const current = this.customersSubject.getValue();
    this.customersSubject.next(current.filter(c => c.identificador !== id));
  }
}