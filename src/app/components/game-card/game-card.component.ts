import { Component, Input } from '@angular/core';
import { dataGame } from 'src/app/interfaces/dataGame.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input()
  dataGame: dataGame = {
    id: 0,
    "name": "",
    "infos": "",
    "tag": null,
    "price": "",
    "image": "",
    "wallpaper": "",
    "description": ""
  }

  constructor(){}

}
