import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Dal Makhni', 'Details', 'https://recipes.timesofindia.com/photo/53097626.cms?imgsize=156015')
  ];
  constructor() { }

  ngOnInit() {
  }

}
