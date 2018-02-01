import { Component } from '@angular/core';

/**
 * Generated class for the RecipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recipe',
  templateUrl: 'recipe.html'
})
export class RecipeComponent {

  name: string;
  description: string;
  favorite: boolean;

  constructor() {
    console.log('Hello RecipeComponent Component');
    this.name = 'Recipe name';
    this.description = 'Recipe description';
    this.favorite = false;
  }
}
