import {NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {RecipeModel} from "../../../app/shared/recipe.model";

@Component({
  selector: 'app-modal-component',
  templateUrl: 'recipe-modal-content.html'
})
export class RecipeModalContentPage {
  recipe: RecipeModel;
  totalQuantity: number = 0;

  orangeSalt = 0.92;
  redSalt = 1.62;
  salt = 0;

  orangeSugar = 18;
  redSugar = 31;
  sugar = 0;

  orangeSaturatedFat = 4;
  redSaturatedFat = 7;
  saturatedFat = 0;

  orangeEnergy = 320;
  redEnergy = 560;
  energy = 0;

  GREEN_COLOR = 'https://cdn-images-1.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png';
  ORANGE_COLOR = 'https://www.headspace.com/blog/wp-content/themes/headspace-v23/src/images/logo@2x.png';
  RED_COLOR = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Red_Circle%28R%3D204%2CGB%3D0%29.svg/500px-Red_Circle%28R%3D204%2CGB%3D0%29.svg.png';

  saltColor: string;
  sugarColor: string;
  saturatedFatColor: string;
  energyColor: string;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.recipe = this.params.get('recipe');
    for (let component of this.recipe.components){
      this.totalQuantity += component.quantity;
    }

    this.saltColor = this.GREEN_COLOR;
    this.sugarColor = this.GREEN_COLOR;
    this.saturatedFatColor = this.GREEN_COLOR;
    this.energyColor = this.GREEN_COLOR;

    this.salt = this.recipe.salt / this.totalQuantity * 100;
    this.sugar = this.recipe.sugar / this.totalQuantity * 100;
    this.saturatedFat = this.recipe.saturated / this.totalQuantity * 100;
    this.energy = this.recipe.energy / this.totalQuantity * 100;

    if (this.salt > this.orangeSalt)
      this.saltColor = this.ORANGE_COLOR;
    if (this.salt > this.redSalt)
      this.saltColor = this.RED_COLOR;

    if (this.sugar > this.orangeSugar)
      this.sugarColor = this.ORANGE_COLOR;
    if (this.sugar > this.redSugar)
      this.sugarColor = this.RED_COLOR;

    if (this.saturatedFat > this.orangeSaturatedFat)
      this.saturatedFatColor = this.ORANGE_COLOR;
    if (this.saturatedFat > this.redSaturatedFat)
      this.saturatedFatColor = this.RED_COLOR;

    if (this.energy > this.orangeEnergy)
      this.energyColor = this.ORANGE_COLOR;
    if (this.energy > this.redEnergy)
      this.energyColor = this.RED_COLOR;

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
