import {NavParams, Platform, ViewController} from "ionic-angular";
import {IngredientModel} from "../../../app/shared/ingredient.model";
import {Component} from "@angular/core";

@Component({
  selector: 'app-modal-component',
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  ingredient: IngredientModel;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.ingredient = this.params.get('ingredient');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
