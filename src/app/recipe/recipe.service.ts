import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 public selectedRecipe  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Dal Makhni', 'This is a Test', 'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015' )
  ];
  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  constructor() { }
}
