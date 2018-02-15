import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipeModel} from "../../app/shared/recipe.model";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
  providers: [[Camera]]
})
export class RecipeListPage {

  continue: boolean = true;
  recipes : RecipeModel[] = [];
  recipeListErr;

  constructor(public navCtrl: NavController, private recipeProvider: RecipeProvider) {

  }

  /**
   * Call provider when view is rendered
   */
  ngAfterViewChecked() {
    console.log("On init");

    if (this.continue === true){
      this.continue = false;
      console.log("Gonna call API");
      this.recipeProvider.getAllRecipes().subscribe(
        (recipes)=> {
          this.recipes = recipes;
          for (let recipe of this.recipes)
            console.log(recipe);
        }, (err) => {
          this.recipeListErr = err;
        }
      )
    }
  }

  onRecipeCardDeleted(cardData: {recipe: RecipeModel}) {
    //this.recipes = this.recipes.filter(item => item !== cardData.recipe);

      console.log("Delete recipe " + cardData.recipe.id);
      this.recipeProvider.deleteRecipeById(cardData.recipe.id.toString()).subscribe(
        (recipe)=> {
          this.recipes = this.recipes.filter(item => item !== cardData.recipe);
        }, (err) => {
          this.recipeListErr = err;
        }
      )
    /**
     * @TODO Remove recipe on API with http.delete
     */
  }

}
