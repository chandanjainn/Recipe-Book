import { ShoppingListService } from './../../shopping/shopping-list.service';
import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe : Recipe;
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }

  addToCart(){
  this.slService.addNewIngredients(this.recipe.ingredients);
  }

}
