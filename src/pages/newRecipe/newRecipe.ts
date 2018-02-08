import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-new-recipe',
  templateUrl: 'newRecipe.html',
  providers: [[Camera]]
})
export class NewRecipePage {


  constructor(public navCtrl: NavController) {

  }
}
