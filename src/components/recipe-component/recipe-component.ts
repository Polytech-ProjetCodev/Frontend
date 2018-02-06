import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IngredientModel} from "../../app/shared/ingredient.model";
import {IngredientProvider} from "../../providers/ingredient/ingredient";

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

  ingredient : IngredientModel;
  err;
  continue = true;

  text: string;

  constructor(private ingredientProvider: IngredientProvider) {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  onDeleteCard(){
    this.cardDeleted.emit({ingredient: this.component.ingredient})
  }

  /**
   * Call provider when view is rendered
   */
  ngAfterViewChecked() {
    console.log("BLOPPPPPP");

    if (this.continue === true){
      this.continue = false;
      this.ingredientProvider.getIngredientByBarcode(this.component.ingredient).subscribe(
        (ingredient)=> {
          this.ingredient = ingredient;
        }, (err) => {
          this.err = err;
        }
      )
    }
  }

}

