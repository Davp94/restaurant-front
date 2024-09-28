import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { RegisterDto } from '../../dto/register.dto';
import { ClienteDto } from '../../dto/cliente.dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private PATH_URL = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);

  register(clienteData: RegisterDto): Observable<ClienteDto> {
    return this.httpClient.post<ClienteDto>(`${this.PATH_URL}/clientes`, clienteData);
  }
}
