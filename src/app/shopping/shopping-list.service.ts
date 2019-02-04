import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  changedIngredients = new Subject<void>();
  private ingredients: Ingredient[] = [
    new Ingredient('Dal', 1),
    new Ingredient('Onion', 2)
  ];
  isEdit = new Subject<number>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientById(id: number) {
    return this.ingredients[id];
  }

  addNewIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.changedIngredients.next();
  }

  addNewIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
  }
  updateIngredient(ing: Ingredient, id: number) {
    this.ingredients[id] = ing;
    this.changedIngredients.next();
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.changedIngredients.next();
  }
}
