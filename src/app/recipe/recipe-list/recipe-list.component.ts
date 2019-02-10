import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subsc: Subscription;
  constructor(
    private recipe: RecipeService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.subsc = this.recipe.editedRecipies.subscribe(() => {
      this.recipes = this.recipe.getRecipes();
    });
    this.dataStorage.getRecipes();
    this.recipes = this.recipe.getRecipes();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
