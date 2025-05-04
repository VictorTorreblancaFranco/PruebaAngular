import { Routes } from '@angular/router';
import { authGuard } from './core/services/auth.guard';
import { LayoutComponent } from './layout/layout/layout.component';

// Exporta las rutas como constante
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
                path: 'customer-list',
                loadComponent: () => import('./feature/customer/customer-list/customer-list.component')
                    .then(m => m.CustomerListComponent),
                title: 'Clientes'
            },
            {
                path: 'customer-form',
                loadComponent: () => import('./feature/customer/customer-form/customer-form.component')
                    .then(m => m.CustomerFormComponent),
                title: 'Nuevo Cliente'
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