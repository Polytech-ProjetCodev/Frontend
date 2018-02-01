export class ComponentModel {
  public ingredient_barcode: string;
  public user_quantity: string;
  public recipe_id: string;

  constructor(ingredient_barcode: string, user_quantity: string, recipe_id: string) {
    this.ingredient_barcode = ingredient_barcode;
    this.user_quantity = user_quantity;
    this.recipe_id = recipe_id;
  }
}
