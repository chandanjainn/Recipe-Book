import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
  public recipeName: string;
  public description: string;
  public shortDesc: string;
  public imageURL: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    shortDesc: string,
    imgURL: string,
    ingredients: Ingredient[]
  ) {
    this.description = desc;
    this.shortDesc = shortDesc;
    this.recipeName = name;
    this.imageURL = imgURL;
    this.ingredients = ingredients;
  }
}
