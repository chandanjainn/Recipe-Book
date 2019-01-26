import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() selectRecipe = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Dal Makhni', 'This is a Test', 'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015')
  ];
  constructor() { }

  ngOnInit() {
  }
onSelectRecipe(recipe : Recipe){
this.selectRecipe.emit(recipe);
}
}
