import {Component} from '@angular/core';
import {RecipeModel} from "../../app/shared/recipe.model";
import {ComponentModel} from "../../app/shared/component.model";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {IngredientProvider} from "../../providers/ingredient/ingredient";
import {RecipeProvider} from "../../providers/recipe/recipe";

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

  options: BarcodeScannerOptions;
  resultsArray: Array<string> = [];
  //results: {};
  continue = true;
  backRecipe: RecipeModel;
  err;

  constructor(private barcode: BarcodeScanner, private recipeProvider: RecipeProvider) {
    console.log('Hello RecipeComponent Component');
    this.recipe = new RecipeModel("My New Recipe", true);
    //this.recipe.components = [];
    this.recipe.components = [new ComponentModel("3222110003925", 100, "1cc", 1)];
  }

  /**
   * Delete component from list
   * @param {{ingredient_barcode: string}} cardData
   */
  onCardDeleted(cardData: {ingredient: string}) {
    this.recipe.components = this.recipe.components.filter(item => item.ingredient !== cardData.ingredient);
  }

  async scanBarcode(){
    this.options = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    const resultBarcode = await this.barcode.scan(this.options);
    const barcodeItem = resultBarcode;
    if (barcodeItem.text !== ""){
      this.recipe.components.push((new ComponentModel(barcodeItem.text, 12, "1cs", 1)));
    }
  }

  onStarClick() {
    this.recipe.favorite = !this.recipe.favorite;
  }

  onSubmitRecipe() {
    if (this.continue === true){
      this.continue = false;
      this.recipeProvider.postRecipe(this.recipe).subscribe(
        (response)=> console.log(response),
        (err) => {
          this.err = err;
        }
      )
    }
  }

}
