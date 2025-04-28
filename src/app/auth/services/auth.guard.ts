// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // 1. Verifica autenticación (sincrónico)
    const user = authService.getCurrentUser();
    if (!user) {
        router.navigate(['/auth/login']);
        return false;
    }

    // 2. Verifica rol (sincrónico)
    const requiredRole = route.data['role'];
    if (requiredRole && !authService.hasRole(requiredRole)) {
        router.navigate(['/shared/acceso-denegado']);
        return false;
    }

    return true;
};