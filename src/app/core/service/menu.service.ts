import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuDto } from '../dto/menu.dto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private PATH_URL = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);

  findAllMenu(): Observable<MenuDto[]> {
    return of([
      { id: 1, nombre: 'menu1', descripcion: 'desc menu1' },
      { id: 2, nombre: 'menu2', descripcion: 'desc menu2' },
      { id: 3, nombre: 'menu3', descripcion: 'desc menu3' },
    ]);
    //return this.httpClient.get<MenuDto[]>(`${this.PATH_URL}/menu`);
  }

  findAllPlatos(): Observable<MenuDto[]> {
    return of([
      { id: 1, nombre: 'menu1', descripcion: 'desc menu1' },
      { id: 2, nombre: 'menu2', descripcion: 'desc menu2' },
      { id: 3, nombre: 'menu3', descripcion: 'desc menu3' },
    ]);
    //return this.httpClient.get<MenuDto[]>(`${this.PATH_URL}/menu`);
  }
}
