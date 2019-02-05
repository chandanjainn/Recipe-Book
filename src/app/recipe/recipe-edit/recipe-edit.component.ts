import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: any;
  isEditMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipe: RecipeService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id =
        params.get('id') === null ? params.get('id') : +params.get('id');
      this.isEditMode = this.id != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeShortDesc = '';

    if (this.isEditMode) {
      const recipe = this.recipe.getRecipeById(this.id);
      recipeName = recipe.recipeName;
      recipeImgPath = recipe.imageURL;
      recipeDescription = recipe.description;
      recipeShortDesc = recipe.shortDesc;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imgPath: new FormControl(recipeImgPath),
      shortDesc: new FormControl(recipeShortDesc),
      desc: new FormControl(recipeDescription)
    });
  }
}
