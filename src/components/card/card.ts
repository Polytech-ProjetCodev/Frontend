import { Component } from '@angular/core';

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

  text: string;
  rComponent: RecipeComponent;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
    this.rComponent = new RecipeComponent("Jambon de Paris","Un bon jambon de Paris des familles", "1ts", "1234");
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

