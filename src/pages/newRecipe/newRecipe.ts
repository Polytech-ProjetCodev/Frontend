import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-new-recipe',
  templateUrl: 'newRecipe.html',
  providers: [[Camera]]
})
export class NewRecipePage {

  options: BarcodeScannerOptions;
  resultsArray: Array<string> = [];
  //results: {};

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {

  }

  async scanBarcode(){

    const resultBarcode = await this.barcode.scan();
    const barcodeItem = resultBarcode;
    this.resultsArray.push(barcodeItem.text);
  }
}
