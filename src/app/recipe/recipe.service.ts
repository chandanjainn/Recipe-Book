import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipes/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  editedRecipies = new Subject<void>();
  private recipes: Recipe[] = [
    new Recipe(
      'Dal Makhni',
      'Dal makhani is a dish originating from the Indian subcontinent, notably in the Punjab region. The primary ingredients are whole black lentil (urad), red kidney beans (rajma), butter and cream. The dish gets its richness from the use of cream, but it can also be prepared with yogurt, milk or no dairy',
      'Dal makhani is a dish originating from the Indian subcontinent.',
      'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015',
      [new Ingredient('Urad Dal', 1), new Ingredient('Onion', 2)]
    ),
    new Recipe(
      'Rajma Chawal',
      'Rajma chawal is a rice dish where cooked rice is mixed with rajma masala or kidney beans masala. A comfort food that comes together in a jiffy.',
      'Rajma Masala – a protein rich Red Kidney Beans curry, is best enjoyed with steamed rice .',
      'http://i0.wp.com/yummilyyours.com/wp-content/uploads/2015/07/DSC_0357.jpg?w=665',
      [new Ingredient('Rajma', 11), new Ingredient('Rice', 12)]
    )
  ];
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

  constructor() {}
}
