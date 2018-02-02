import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";
import {RecipeComponentProvider} from "../../providers/component/component";

@Component({
  selector: 'page-new-recipe',
  templateUrl: 'newRecipe.html',
  providers: [[Camera]]
})
export class NewRecipePage {


  constructor(public navCtrl: NavController) {

  }
}
