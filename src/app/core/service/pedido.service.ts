import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private PATH_URL = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);
}
