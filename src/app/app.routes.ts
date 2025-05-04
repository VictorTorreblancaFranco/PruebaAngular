// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from '../app/core/services/auth.guard';
import { LayoutComponent } from '../app/layout/layout/layout.component'; // Importamos el LayoutComponent
import { RegisterComponent } from './feature/auth/register/register.component';

export const routes: Routes = [

    { path: 'register', component: RegisterComponent },
    {
        path: 'login',
        loadComponent: () => import('../app/feature/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        component: LayoutComponent,  // Cargamos el LayoutComponent
        canActivate: [authGuard],    // Protegemos la ruta con el AuthGuard
        children: [
            {
                path: 'customer-form',
                loadComponent: () => import('./feature/customer/customer-form/customer-form.component').then(m => m.CustomerFormComponent)
            },
            {
                path: 'customer-list',
                loadComponent: () => import('./feature/customer/customer-list/customer-list.component').then(m => m.CustomerListComponent)
            },
            // Otras rutas principales van aquí
        ]
    },
    { path: '**', redirectTo: 'login' }
];
