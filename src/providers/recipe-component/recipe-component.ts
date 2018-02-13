///<reference path="../../app/shared/recipe.model.ts"/>
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CONFIG} from "../../config";
import {RecipeModel} from "../../app/shared/recipe.model";
import {ComponentModel} from "../../app/shared/component.model";

/*
  Generated class for the IngredientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeComponentProvider {

  componentUrl = CONFIG.api.url() + 'component';

  constructor(public http: HttpClient) {
    console.log('Hello IngredientProvider Provider');
  }

  getComponentById(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(this.componentUrl + '/' + id + ".json");
  }

  postComponent(component: ComponentModel, recipeId: number): Observable<ComponentModel> {
    console.log(this.componentUrl + '.json');

    let componentObj = {
      ingredient: component.ingredient,
      quantity: component.quantity,
      recipe: recipeId
    };

    return this.http.post<ComponentModel>(this.componentUrl + '.json', componentObj);
  }
}
