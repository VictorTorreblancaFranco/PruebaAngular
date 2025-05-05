import { Routes } from '@angular/router';
import { authGuard } from './core/services/auth.guard';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./feature/auth/login/login.component').then(m => m.LoginComponent),
        title: 'Login'
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/main-menu/main-menu.component')
                    .then(m => m.MainMenuComponent),
                title: 'Menú Principal'
            },
            {
                path: 'pages-customer',
                loadComponent: () => import('./pages/pages-customer/pages-customer.component')
                    .then(m => m.PagesCustomerComponent),
                title: 'Gestión de Clientes',
                children: [
                    {
                        path: '',
                        redirectTo: 'lista',
                        pathMatch: 'full'
                    },
                    {
                        path: 'lista',
                        loadComponent: () => import('./feature/customer/customer-list/customer-list.component')
                            .then(m => m.CustomerListComponent),
                        title: 'Lista de Clientes'
                    },
                    {
                        path: 'formulario',
                        loadComponent: () => import('./feature/customer/customer-form/customer-form.component')
                            .then(m => m.CustomerFormComponent),
                        title: 'Formulario de Cliente'
                    },
                    {
                        path: 'editar/:id',
                        loadComponent: () => import('./feature/customer/customer-form/customer-form.component')
                            .then(m => m.CustomerFormComponent),
                        title: 'Editar Cliente'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];