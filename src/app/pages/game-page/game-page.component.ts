import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockGameCards } from 'src/mock/mock-game-cards';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  @Input()
  id: number = 0

  @Input()
  name: string = ""

  @Input()
  infos: string = ""

  @Input()
  tag: string | null = null

  @Input()
  price: string = ""

  @Input()
  image: string = ""

  @Input()
  wallpaper: string = ""

  @Input()
  description: string = ""

  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = Number(id)
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: number){
    const dataPage = mockGameCards.filter(game => game.id === id)[0]

    this.name = dataPage.name
    this.infos = dataPage.infos
    this.tag = dataPage.tag
    this.price = dataPage.price
    this.image = dataPage.image
    this.wallpaper = dataPage.wallpaper
    this.description = dataPage.description
  }
}
