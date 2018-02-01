import { Component } from '@angular/core';
import {RecipeModel} from "../../app/shared/recipe.model";
import {ComponentModel} from "../../app/shared/component.model";

/**
 * Generated class for the RecipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.html'
})
export class RecipeComponent {

  recipe: RecipeModel;

  constructor() {
    console.log('Hello RecipeComponent Component');
    this.recipe = new RecipeModel("MyRecipe", false);
    this.recipe.name = 'Recipe name';
    this.recipe.favorite = false;
    this.recipe.components = [];
    this.recipe.components.push((new ComponentModel("66245777675", "12", "1")));
    this.recipe.components.push((new ComponentModel("12", "229345", "1")));
  }
}
