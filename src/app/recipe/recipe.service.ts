import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipes/recipe.model';
import { NotificationService } from '../shared/notification.service';

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
      this.notifyChanges('added');
    } else {
      this.recipes[index] = recipe;
      this.notifyChanges('modified');
    }
    setTimeout(() => this.editedRecipies.next(), 500);
  }

  private notifyChanges(action: string) {
    this.notificationService.showSuccess(
      'Recipe ' +
        action +
        ' successfully. Click on Manage->Save Changes to save them.'
    );
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.notifyChanges('deleted');
    this.editedRecipies.next();
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.editedRecipies.next();
  }

  constructor(private notificationService: NotificationService) {}
}
