import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { authGuard } from './core/guard/auth.guard';
import { ClienteFormComponent } from './feature/cliente/cliente-form/cliente-form.component';
import { MenuComponent } from './feature/menu/menu.component';
import { PedidoComponent } from './feature/pedido/pedido.component';
import { MainComponent } from './shared/components/main/main.component';

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
    canActivate: [authGuard],
    children: [
      {
        component: MainComponent,
        path: 'index',
        title: 'Index'
      },
      {
        component: MenuComponent,
        path: 'menu',
        title: 'Menu'
      },
      {
        component: PedidoComponent,
        path: 'pedido',
        title: 'Pedido'
      }
    ]
  }
];
