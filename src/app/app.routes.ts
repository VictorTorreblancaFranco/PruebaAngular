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
            // Ruta para el Menú Principal
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component')
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
            },
            {
                path: 'product',  // Modificado a /product
                loadComponent: () => import('./pages/page-product/page-product.component')
                    .then(m => m.PageProductComponent),
                title: 'Gestión de Productos',
                children: [
                    {
                        path: '',
                        redirectTo: 'lista',
                        pathMatch: 'full'
                    },
                    {
                        path: 'lista',
                        loadComponent: () => import('./feature/product/product-list/product-list.component')
                            .then(m => m.ProductListComponent),
                        title: 'Lista de Productos'
                    },
                    {
                        path: 'formulario',
                        loadComponent: () => import('./feature/product/product-form/product-form.component')
                            .then(m => m.ProductFormComponent),
                        title: 'Formulario de Producto'
                    },
                    {
                        path: 'editar/:id',
                        loadComponent: () => import('./feature/product/product-form/product-form.component')
                            .then(m => m.ProductFormComponent),
                        title: 'Editar Producto'
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
