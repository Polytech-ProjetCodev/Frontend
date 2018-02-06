import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IngredientModel} from "../../app/shared/ingredient.model";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-recipe-component',
  templateUrl: 'recipe-component.html'
})
export class RecipeComponentComponent {

  @Input() component: {ingredient: string, quantity: number, front_quantity: string, recipe: number};

  @Output() cardDeleted = new EventEmitter<{ingredient: string}>();

  relatedIngredient : IngredientModel;


  text: string;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  onDeleteCard(){
    this.cardDeleted.emit({ingredient: this.component.ingredient})
  }
}

