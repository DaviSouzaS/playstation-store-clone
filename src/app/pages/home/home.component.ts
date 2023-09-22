import { Component } from '@angular/core';
import { dataGame } from 'src/app/interfaces/dataGame.interface';
import { mockCategoryCards } from 'src/mock/mock-category-cards';
import { mockGameCards } from 'src/mock/mock-game-cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  dataGame: dataGame[] = mockGameCards

  dataCategory: string[] = mockCategoryCards

}
