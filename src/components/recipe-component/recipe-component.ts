import { Component } from '@angular/core';

/**
 * Generated class for the RecipeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-recipe-component',
  templateUrl: 'recipe-component.html'
})
export class RecipeComponent {

  detail: string;
  name: string;
  barcode: string;
  quantity: string;

  constructor() {
    console.log('Hello RecipeComponent Component');
    this.detail = 'Component name';
    this.detail = 'Component detail';
    this.barcode = '01236589876543';
    this.quantity = '2cc';
  }
}
