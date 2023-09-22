import { Component, Input } from '@angular/core';
import { mockCategoryCards } from "../../../mock/mock-category-cards"

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {

  @Input()
  image: string = ""

  constructor(){}

}
