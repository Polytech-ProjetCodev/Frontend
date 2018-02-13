import {ComponentModel} from "./component.model";

export class RecipeModel {
  public id: number;
  public name: string;
  public favorite: boolean;
  public components : ComponentModel[];
  public owner;
  public energy;
  public fat;
  public saturated;
  public carbohydrates;
  public sugar;
  public protein;
  public salt;

  constructor(name: string, favorite: boolean) {
    this.name = name;
    this.favorite = favorite;
    this.components = [];
    this.owner = 0;
    this.energy = 0;
    this.fat = 0;
    this.saturated = 0;
    this.carbohydrates = 0;
    this.sugar = 0;
    this.protein = 0;
    this.salt = 0;
  }
}
