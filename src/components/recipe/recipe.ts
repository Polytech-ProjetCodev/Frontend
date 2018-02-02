import {Component} from '@angular/core';
import {RecipeModel} from "../../app/shared/recipe.model";
import {ComponentModel} from "../../app/shared/component.model";
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

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

  constructor(private barcode: BarcodeScanner) {
    console.log('Hello RecipeComponent Component');
    this.recipe = new RecipeModel("New Recipe", true);
    this.recipe.components = [];
  }

  /**
   * Delete component from list
   * @param {{ingredient_barcode: string}} cardData
   */
  onCardDeleted(cardData: {ingredient_barcode: string}) {
    this.recipe.components = this.recipe.components.filter(item => item.ingredient_barcode !== cardData.ingredient_barcode);
  }

  async scanBarcode(){

    const resultBarcode = await this.barcode.scan();
    const barcodeItem = resultBarcode;
    this.recipe.components.push((new ComponentModel(barcodeItem.text, "12", "1")));
  }


}
