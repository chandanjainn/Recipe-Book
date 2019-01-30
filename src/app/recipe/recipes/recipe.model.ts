import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe{
public recipeName : string;
public description : string;
public imageURL : string;
public ingredients : Ingredient[];

constructor(name : string, desc : string, imgURL : string, ingredients : Ingredient[]){
    this.description = desc;
    this.recipeName = name;
    this.imageURL = imgURL;
    this.ingredients = ingredients;
}
}