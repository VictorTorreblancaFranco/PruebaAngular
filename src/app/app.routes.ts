import { Routes } from '@angular/router';

// new import
import { CustomerFormComponent } from './feature/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { StockFormComponent } from './feature/stock/stock-form/stock-form.component';
import { StockListComponent } from './feature/stock/stock-list/stock-list.component';
import { RequestFormComponent } from './feature/request/request-form/request-form.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { authGuard } from './auth/services/auth.guard';
import { AccessDenegadoComponent } from './shared/access-denegado/access-denegado.component';

export const routes: Routes = [
    // CRUDs sin login
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

    // Rutas protegidas por rol
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard],
        data: { role: 'administrador' }
    },
    {
        path: 'colaborador/inventario',
        loadComponent: () => import('./colaborador/inventario/inventario.component').then(m => m.InventarioComponent),
        canActivate: [authGuard],
        data: { role: 'colaborador' }
    },

    // Auth
    {
        path: 'auth/login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'auth/register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
    },

    // Página de acceso denegado
    {
        path: 'access-denegado',
        loadComponent: () =>
            import('./shared/access-denegado/access-denegado.component').then(
                m => m.AccessDenegadoComponent // ← ¡Con "D"!
            ),
        title: 'Acceso Denegado'
    },

    // Redirección base
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },

    {
        path: 'admin',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
        data: { fallback: 'access-denegado' } // Custom data
    },
    // Ruta directa para acceso denegado
    {
        path: 'access-denegado',
        component: AccessDenegadoComponent,
        title: 'Acceso Denegado'
    }
];
