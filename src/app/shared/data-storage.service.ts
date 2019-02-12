import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipes/recipe.model';

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
      .get<Recipe[]>(this.getURL())
      .pipe(
        map(recipes => {
          for (let recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(recipes => {
        this.recipeService.setRecipe(recipes);
      });
  }

  private getURL(): string {
    const token = this.authService.getToken();
    return 'https://book-of-spices.firebaseio.com/recipes.json?auth=' + token;
  }
}
