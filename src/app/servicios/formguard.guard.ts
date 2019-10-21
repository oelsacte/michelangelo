import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';
import { LoginService } from '../login/login.service';

@Injectable()
export class FormguardGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (isNullOrUndefined(this.loginService.recuperarToken())) {
        console.log('No hay sesión activa');
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
}
