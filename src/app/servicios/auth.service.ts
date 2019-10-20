import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable()
export class AuthService {

  END_POINT = '';
  constructor(
    private http: HttpClient
  ) { }

  login(usuario: Usuario): Observable<any> {
    return;

  //   const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
  // 'Authorization': 'Basic ' + })
    
  //   return this.http.post(this.END_POINT, params, {headers: httpHeaders});
  }

}
