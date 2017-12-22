import { Component } from '@angular/core';


@Component({
  selector: 'recipe-card',
  templateUrl: 'card.html'
})


export class RecipeCard {
  rComponent = new RecipeComponent("Jambon de Paris","Un bon jambon de Paris des familles");
}

class RecipeComponent {
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
