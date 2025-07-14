import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const c = await import('./pages/login/login.component');
            return c.LoginComponent;
        }
    },
    {
        path: 'home',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: async () => {
            const c = await import('./pages/home/home.component');
            return c.HomeComponent;
        }
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: async () => {
            const c = await import('./pages/dashboard/dashboard.component');
            return c.DashboardComponent;
        }
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
