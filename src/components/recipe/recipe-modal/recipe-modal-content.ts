import {NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {RecipeModel} from "../../../app/shared/recipe.model";

@Component({
  selector: 'app-modal-component',
  templateUrl: 'recipe-modal-content.html'
})
export class RecipeModalContentPage {
  recipe: RecipeModel;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.recipe = this.params.get('recipe');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
