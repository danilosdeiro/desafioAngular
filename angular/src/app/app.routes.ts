import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./pages/login/login.component').then(m => m.LoginComponent);
        }
    },
    {
        path: 'home',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: () => {
            return import('./pages/home/home.component').then(m => m.HomeComponent);
        }
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [loginGuard],
        loadComponent: () => {
            return import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent);
        }
    }
];
