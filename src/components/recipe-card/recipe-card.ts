import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IngredientModel} from "../../app/shared/ingredient.model";
import {ModalController} from "ionic-angular";
import {RecipeModel} from "../../app/shared/recipe.model";
import {RecipeProvider} from "../../providers/recipe/recipe";
import {ModalContentPage} from "../recipe-component/recipe-component-modal/modal-content";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-recipe-card',
  templateUrl: 'recipe-card.html'
})
export class RecipeCardComponent {

  @Input() recipe: RecipeModel;

  @Output() cardDeleted = new EventEmitter<{recipe: RecipeModel}>();

  err;
  continue = true;

  text: string;

  constructor(public modalCtrl: ModalController, private recipeProvider: RecipeProvider) {
    console.log('Hello CardComponent Component for recipe');
  }

  onDeleteRecipeCard(){
    this.cardDeleted.emit({recipe: this.recipe})
  }

  ///**
  // * Call provider when view is rendered
  // */
  //ngAfterViewChecked() {
  //  if (this.allowSubmit === true){
  //    this.allowSubmit = false;
  //    this.ingredientProvider.getIngredientByBarcode(this.component.ingredient).subscribe(
  //      (ingredient)=> {
  //        this.ingredient = ingredient;
  //      }, (err) => {
  //        this.err = err;
  //      }
  //    )
  //  }
  //}

  //presentModal(referralIngredient: IngredientModel) {
  //  if (referralIngredient !== undefined){
  //    let modal = this.modalCtrl.create(ModalContentPage, referralIngredient);
  //    modal.present();
  //  }
  //}
}

