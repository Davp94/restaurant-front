import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { authGuard } from './core/guard/auth.guard';
import { ClienteFormComponent } from './feature/cliente/cliente-form/cliente-form.component';

export const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
    title: 'Login',
    children: []
  },
  {
    component: ClienteFormComponent,
    path: 'nuevo-registro',
    title: 'Nuevo Registro',
  },
  {
    component: NavigationComponent,
    path: '',
    title: 'Index',
    canActivate: [authGuard]
  }
];
