import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { LoginService } from './login.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public titulo = 'Por favor inicie sesión (Intente con user@example, password 1234)';
  public usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private router: Router) {
    this.usuario = new Usuario();
  }

  login() {
    console.log(this.usuario);
    if (isNullOrUndefined(this.usuario.email) || isNullOrUndefined(this.usuario.password)) {
      swal(
        {
          type: 'error',
          title: 'Error',
          text: 'Username y password son datos requeridos para iniciar sesión [user@example.com, 1234]'
        }
      );
      return;
    }
    this.loginService.login(this.usuario).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/formulario']);
      this.loginService.guardarToken(resp);

      swal({
        type: 'success',
        title: 'Autenticación éxitosa',
        text: `Inicia sesión ${this.usuario.email} con token ${this.loginService.recuperarToken()}`
      });
    }
    );
  }
}
