import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw as throwError } from 'rxjs/observable/throw';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(sessionStorage.getItem('token')) {
      req = req.clone({ headers: req.headers.set( 'token', sessionStorage.getItem('token'))});
    } else {
      this.router.navigate(['/login']);
    }
    return next.handle(req).pipe(
      catchError(e => {
        if (e.status === 401) {
          // sessionStorage.clear();
          this.router.navigate(['/login']);
        }

        if (e.status === 403) {
          swal('Acceso denegado', `Hola no tienes acceso a este recurso!`, 'warning');
          this.router.navigate(['/login']);
        }
        return throwError(e);
      })
    );
  }


}
