import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { LoginService } from '../login/login.service';
import { of } from 'rxjs/observable/of';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

class LoginServiceStube {
  verify() {
    return of(true);
  }
}
describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      providers: [
        { provide: LoginService, useClass: LoginServiceStube }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente para Test', () => {
    expect(component).toBeTruthy();
  });

  it('Deben generarse tres campos del formulario', () => {
    expect(Object.keys(component.formGroup.controls)).toEqual(['name', 'edad', 'comments']);
  });

  it('El formulario es inválido en su estado inicial', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('NOMBRE es inválido si contiene números', () => {
    const nombre = component.formGroup.controls['name'];
    nombre.setValue('juan123');
    expect(nombre.valid).toBeFalsy();
  });

  it('EDAD es inválido si contiene letras', () => {
    const edad = component.formGroup.controls['edad'];
    edad.setValue('juan123');
    expect(edad.valid).toBeFalsy();
  });

  it('COMENTARIO es inválido si contiene más de 30 caracteres', () => {
    const comentario = component.formGroup.controls['comments'];
    comentario.setValue('123456789 123456789 1234567890 1234567890');
    expect(comentario.valid).toBeFalsy();
  });
});
