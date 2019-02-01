import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 public selectedRecipe  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Dal Makhni', 'Dal makhani is a dish originating from the Indian subcontinent, notably in the Punjab region. The primary ingredients are whole black lentil (urad), red kidney beans (rajma), butter and cream. The dish gets its richness from the use of cream, but it can also be prepared with yogurt, milk or no dairy', 'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015' ,  [new Ingredient('Urad Dal',1), new Ingredient('Rajma',1) ]) ,
    new Recipe( 'Dal Makhni', 'Dal makhani is a dish originating from the Indian subcontinent, notably in the Punjab region. The primary ingredients are whole black lentil (urad), red kidney beans (rajma), butter and cream. The dish gets its richness from the use of cream, but it can also be prepared with yogurt, milk or no dairy', 'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015' ,  [new Ingredient('Urad Dal',11), new Ingredient('Rajma',22) ])
  ];
  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipeById(id : number) {
    return this.recipes[id];
  }
  
  constructor() { }
}
