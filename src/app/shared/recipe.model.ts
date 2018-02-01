import {ComponentModel} from "./component.model";

export class RecipeModel {
  public name: string;
  public favorite: boolean;
  public components : Component[];

  constructor(name: string, favorite: boolean) {
    this.name = name;
    this.favorite = favorite;
    this.components = [];
  }
}
