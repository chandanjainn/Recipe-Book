import { ShoppingListService } from './../../shopping/shopping-list.service';
import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe : Recipe;
id:number;
  constructor(private slService : ShoppingListService,
              private recipeService : RecipeService,
              private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params  => {
        this.id = +params.get('id');
        this.recipe= this.recipeService.getRecipeById(this.id);
      }));
  }

  addToCart(){
  this.slService.addNewIngredients(this.recipe.ingredients);
  }

}
