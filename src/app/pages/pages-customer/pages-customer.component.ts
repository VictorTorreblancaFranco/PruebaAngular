import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar/sidebar.component';
import { CustomerListComponent } from '../../feature/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from '../../feature/customer/customer-form/customer-form.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages-customer',
  standalone: true,
  imports: [
    SidebarComponent,
    CustomerListComponent,
    CustomerFormComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './pages-customer.component.html',
  styleUrls: ['./pages-customer.component.scss']
})
export class PagesCustomerComponent { }
