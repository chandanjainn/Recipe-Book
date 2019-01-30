import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  changedIngredients  = new EventEmitter<void>();
  private ingredients : Ingredient[]=[
    new Ingredient('Dal',1),
    new Ingredient('Onion',2)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addNewIngredient(ing : Ingredient){
    this.ingredients.push(ing);
    this.changedIngredients.emit();
  }

  addNewIngredients(ings : Ingredient[]){
    this.ingredients.push(...ings);
  }

}
