import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo = 'Por favor inicie sesión';
  public usuario: Usuario;

  constructor(private loginService: LoginService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login() {
    console.log(this.usuario);
    if (this.usuario.email == null || this.usuario.password == null) {
      swal.fire('Error Login', 'Email o password son datos obligatorios', 'error');
      return;
    }
    this.loginService.login(this.usuario).subscribe(resp => {
      console.log(resp);
    }
    );

  }

}
