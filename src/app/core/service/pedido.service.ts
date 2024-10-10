import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PedidoDto } from '../dto/pedido.dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private PATH_URL = environment.BACKEND_URL+'pedidos';
  private httpClient = inject(HttpClient);

  findAllPlatos(): Observable<PedidoDto[]> {
    return of([
      { id: 1, fecha: new Date(), total: 120 },
      { id: 2, fecha: new Date(), total: 150 },
      { id: 3, fecha: new Date(), total: 200 },
    ]);
  }
}
