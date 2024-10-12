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

  findAllMenu(ids: number[]): Observable<MenuDto[]> {

    return this.httpClient.get<MenuDto[]>(`${this.PATH_URL}/menu`, {params: {ids: ids}});
  }

  findAllPlatos(): Observable<PlatoDto[]> {
    return this.httpClient.get<PlatoDto[]>(`${this.PATH_URL}/menu/platos`);
  }
}
