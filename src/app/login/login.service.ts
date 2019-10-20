import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  END_POINT = 'http://localhost:3000/login';

  constructor(
    private router: Router,
    private http: HttpClient) { }

  private isNoAutorizado(e): boolean {
    if (e.status === 401 || e.status === 403) {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  public login(usuario: Usuario): Observable<any> {
    return this.http.post(this.END_POINT, usuario);
  }



}
