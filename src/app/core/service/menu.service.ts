import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuDto } from '../dto/menu.dto';
import { PlatoDto } from '../dto/plato.dto';

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

  findAllPlatos(): Observable<PlatoDto[]> {
    return of([
      { id: 1, nombre: 'plato1', precio: 123, image: '' },
      { id: 2, nombre: 'plato2', precio: 122.43, image: '' },
      { id: 3, nombre: 'plato3', precio: 144.323, image: '' },
      { id: 4, nombre: 'plato4', precio: 144.323, image: '' },
      { id: 5, nombre: 'plato5', precio: 144.323, image: '' },
    ]);
    //return this.httpClient.get<MenuDto[]>(`${this.PATH_URL}/menu`);
  }
}
