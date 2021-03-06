import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IngredientModel} from "../../app/shared/ingredient.model";
import {CONFIG} from "../../config";

/*
  Generated class for the IngredientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IngredientProvider Provider');
  }

  getIngredientByBarcode(barcode: string): Observable<IngredientModel> {
    console.log(CONFIG.api.url() + 'ingredient/' + barcode + ".json");
    return this.http.get<IngredientModel>(CONFIG.api.url() + 'ingredient/' + barcode + ".json");
  }

}
