import { Component, OnInit } from '@angular/core';
import { CardEvent } from '../../models/cardevent';

@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {

  public cards: CardEvent[] = [{
    'evento': '2016 Festival & Performance Guide.',
    'fechalarga': 'Octuber 8, 2017'
  },
  {
    'evento': 'Michelangelo: The quest for the sacred and eternal',
    'fechalarga': 'Octuber 16, 2017'
  },
  {
    'evento': 'Grand Hall Music Festival presents James Simon\'s The Spirit World',
    'fechalarga': 'Octuber 25, 2017'
  },
  {
    'evento': 'Robert Blakes\'s exhibition: An inmersive experience through time.',
    'fechalarga': 'Octuber 1, 2017'
  }

  ] 

  constructor() { }

  ngOnInit() {
  }

}
