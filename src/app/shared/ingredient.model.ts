export class IngredientModel {

  public barcode: string;
  public name: string;
  public energy_100g: number;
  public fat_100g: number;
  public saturated_fat_100g: number;
  public carbohydrates_100g: number;
  public sugar_100g: number;
  public protein_100g: number;
  public salt_100g: number;

  constructor(barcode: string, name: string, energy_100g: number, fat_100g: number, saturated_fat_100g: number,
              carbohydrates_100g: number, sugar_100g: number, protein_100g: number, salt_100g: number) {
    this.barcode = barcode;
    this.name = name;
    this.energy_100g = energy_100g;
    this.fat_100g = fat_100g;
    this.saturated_fat_100g= saturated_fat_100g;
    this.carbohydrates_100g = carbohydrates_100g;
    this.sugar_100g = sugar_100g;
    this.protein_100g = protein_100g;
    this.salt_100g = salt_100g;
  }
}
