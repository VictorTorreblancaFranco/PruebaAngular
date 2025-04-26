import { Routes } from '@angular/router';


//new import
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { StockFormComponent } from './feature/stock/stock-form/stock-form.component';
import { StockListComponent } from './feature/stock/stock-list/stock-list.component';
import { RequestFormComponent } from './feature/request/request-form/request-form.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';



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
        path: 'request-form',
        component: RequestFormComponent
    },
    {
        path: 'request-list',
        component: RequestListComponent
    },
    {
        path: 'stock-form',
        component: StockFormComponent
    },
    {
        path: 'stock-list',
        component: StockListComponent
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer-form' 
    }
];