import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, catchError, of } from 'rxjs';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Verificación sincrónica básica
    if (!authService.isAuthenticated()) {
        return router.createUrlTree(['/login'], {
            queryParams: {
                redirectTo: router.url,
                reason: 'not_authenticated'
            }
        });
    }

    return true;
};