import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() ingredient: {ingredient_barcode: string, user_quantity: string, recipe_id: string};

  @Output() cardDeleted = new EventEmitter<{ingredient_barcode: string}>();


  text: string;
  rComponent: RecipeComponent;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
    this.rComponent = new RecipeComponent("Jambon de Paris","Un bon jambon de Paris des familles", "1ts", "1234");
  }

  onDeleteCard(){
    this.cardDeleted.emit({ingredient_barcode: this.ingredient.ingredient_barcode})
  }

}


class RecipeComponent {
  title: string;
  description: string;
  quantity: string;
  barcode: string;
  constructor(title: string, description: string, quantity: string, barcode: string) {
    this.title = title;
    this.description = description;
    this.quantity = quantity;
    this.barcode = barcode;
  }
}

