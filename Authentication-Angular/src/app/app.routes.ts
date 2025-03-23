
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.gards';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent) 
  },
  { 
    path: 'signup', 
    loadComponent: () => import('./components/signup/signup.component').then(c => c.SignupComponent) 
  },
  { 
    path: 'home', 
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login' }
];