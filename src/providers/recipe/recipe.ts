///<reference path="../../app/shared/recipe.model.ts"/>
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CONFIG} from "../../config";
import {RecipeModel} from "../../app/shared/recipe.model";

/*
  Generated class for the IngredientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {

  recipeUrl = CONFIG.api.url() + 'recipe';

  constructor(public http: HttpClient) {
    console.log('Hello IngredientProvider Provider');
  }

  getRecipeById(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(this.recipeUrl + '/' + id + ".json");
  }

  getAllRecipes(): Observable<RecipeModel[]> {
    console.log(this.recipeUrl + '.json');
    return this.http.get<RecipeModel[]>(this.recipeUrl + '.json');
  }

  postRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    console.log(this.recipeUrl + '.json');

    let recipeObj = {
      name: recipe.name,
      favorite: recipe.favorite
    };

    return this.http.post<RecipeModel>(this.recipeUrl + '.json', recipeObj);
  }
}
