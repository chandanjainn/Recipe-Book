import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subsc: Subscription;
  constructor(private recipe: RecipeService) {}

  ngOnInit() {
    this.subsc = this.recipe.editedRecipies.subscribe(() => {
      this.recipes = this.recipe.getRecipes();
    });
    this.recipes = this.recipe.getRecipes();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
