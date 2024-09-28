import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto } from '../../dto/login.dto';
import { environment } from '../../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { TokenDto } from '../../dto/token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private PATH_URL = environment.BACKEND_URL;
  private httpClient = inject(HttpClient);

  login(credenciales: LoginDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(`${this.PATH_URL}/user/login`, credenciales).pipe(
      tap((response: TokenDto) => {
        this.token = response.token;
        localStorage.setItem('token', response.token);
      })
    )
  }

  getToken(): string | null {
    if(!this.token){
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
}
