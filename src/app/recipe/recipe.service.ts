import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipes/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  editedRecipies = new Subject<void>();
  private recipes: Recipe[] = [];
  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipeById(id: number) {
    return this.recipes[id];
  }

  public addOrEditRecipe(recipe: Recipe, isEditMode: boolean, index: number) {
    if (!isEditMode) {
      this.recipes.push(recipe);
    } else {
      this.recipes[index] = recipe;
    }
    this.editedRecipies.next();
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.editedRecipies.next();
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.editedRecipies.next();
  }

  constructor() {}
}
