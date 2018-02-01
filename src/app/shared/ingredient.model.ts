export class IngredientModel {

  public barcode: string;
  public fat: string;
  public satured_fat: string;
  public sugars: string;
  public salt: string;

  constructor(barcode: string, fat: string, satured_fat: string, sugars: string, salt: string) {
    this.barcode = barcode;
    this.fat = fat;
    this.satured_fat = satured_fat;
    this.sugars = sugars;
    this.salt = salt;
  }
}
