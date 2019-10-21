import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Injectable()
export class LoginService {

  private END_POINT_LOGIN = 'http://localhost:3000/login';
  private END_POINT_VERIFY = 'http://localhost:3000/verify';
  private _token: string;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  public login(usuario: Usuario): Observable<any> {
    return this.http.post(this.END_POINT_LOGIN, usuario);
  }

  public verify() {
    return this.http.get(this.END_POINT_VERIFY);
  }

  public guardarToken(accessToken: string) {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  public recuperarToken(): string {
    return sessionStorage.getItem('token');
  }

  public obtenerDatosToken(accessToken: string) {
    if (!isNullOrUndefined(accessToken)) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }
}
