import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: any;
  isEditMode = false;
  recipeForm: FormGroup;
  recipeToAddOrEdit: Recipe;

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
    const recipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.desc,
      this.recipeForm.value.shortDesc,
      this.recipeForm.value.imgPath,
      this.recipeForm.value.ingredients
    );
    this.recipe.addOrEditRecipe(recipe, this.isEditMode, this.id);
  }

  initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeShortDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.isEditMode) {
      const recipe = this.recipe.getRecipeById(this.id);
      recipeName = recipe.recipeName;
      recipeImgPath = recipe.imageURL;
      recipeDescription = recipe.description;
      recipeShortDesc = recipe.shortDesc;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingName: new FormControl(
                ingredient.ingredientName,
                Validators.required
              ),
              ingAmount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern('^[1-9]+[0-9]*$')
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgPath: new FormControl(recipeImgPath, Validators.required),
      shortDesc: new FormControl(recipeShortDesc, Validators.required),
      desc: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        ingName: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$')
        ]),
        ingAmount: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$')
        ])
      })
    );
  }
}
