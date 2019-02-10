import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipe() {
    return this.httpClient.put(this.getURL(), this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpClient
      .get(this.getURL())
      .pipe(
        map((recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      });
  }

  private getURL(): string {
    const token = this.authService.getToken();
    return 'https://book-of-spices.firebaseio.com/recipes.json?auth=' + token;
  }
}
