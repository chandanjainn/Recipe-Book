import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeItem : Recipe;
  constructor(private recipe : RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelect(){
    this.recipe.selectedRecipe.emit(this.recipeItem) ;
  }

}
