import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from '../login/login.service';
import swal from 'sweetalert2';
import { Persona } from '../models/persona';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public formGroup: FormGroup;

  public persona: Persona;

  public persona2: Persona;

  public titulo = 'Este es el formulario que contiene las validaciones requeridas';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService) {
    this.buildForm();
    this.persona = new Persona();
    this.persona2 = new Persona();
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150),
      Validators.pattern(/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/)]],
      edad: ['', [Validators.required,
      Validators.max(100),
      CustomValidators.number]],
      comments: ['', [Validators.required,
      Validators.maxLength(30)
      ]]
    });
  }

  onSubmit() {
    console.log('reactiveForm', this.formGroup.value);
    if (isNullOrUndefined(this.persona.nombre) || isNullOrUndefined(this.persona.edad) || isNullOrUndefined(this.persona.comentario)) {
      swal(
        {
          type: 'error',
          title: 'Error',
          text: 'Por favor llene el formulario. Todos los campos son requeridos.'
        }
      );
      return;
    }
    this.loginService.verify().subscribe(resp => {
      swal({
        type: 'success',
        title: 'Check de token éxitoso',
        text: `Respuesta ${JSON.stringify(this.persona)} `
      });
      this.persona2 = this.persona;
    });
  }

  get name() { return this.formGroup.get('name'); }
  get edad() { return this.formGroup.get('edad'); }
  get comments() { return this.formGroup.get('comments'); }

}
