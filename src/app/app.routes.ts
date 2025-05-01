import { Routes } from '@angular/router';


//new import
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';


export const routes: Routes = [
    
    {
        path: 'customer-form',
        component: CustomerFormComponent
    },
    {
        path: 'customer-list',
        component: CustomerListComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer-form'
    }
];


