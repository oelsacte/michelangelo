import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @Input() persona: Persona;

  public titulo = 'Segundo componente visor.component.ts. Recibe via @Input respuesta de formulario';

  constructor() { }

  ngOnInit() {
  }

}
