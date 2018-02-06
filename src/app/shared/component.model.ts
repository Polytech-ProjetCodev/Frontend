export class ComponentModel {
  public ingredient: string;
  public quantity: number;
  public front_quantity: string;
  public recipe: number;

  constructor(ingredient: string, quantity: number, front_quantity: string, recipe: number) {
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.front_quantity = front_quantity;
    this.recipe = recipe;
  }
}
