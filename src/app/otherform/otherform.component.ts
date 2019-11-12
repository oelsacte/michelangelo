import { CardEvent } from './../models/cardevent';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-otherform',
  templateUrl: './otherform.component.html',
  styleUrls: ['./otherform.component.scss']
})
export class OtherformComponent implements OnInit {

  public cliente: Cliente;

  public opciones: CardEvent[];

  constructor() { }

  ngOnInit() {

    this.cliente = new Cliente();

    this.opciones = [
      {
        evento: 'dolar',
        fechalarga: 'dolar',
      },
      {
        evento: 'euro',
        fechalarga: 'euro',
      },
      {
        evento: 'peso',
        fechalarga: 'peso',
      },
    ];
  }



  onSubmit(){
    console.log(this.cliente);
  }

}
