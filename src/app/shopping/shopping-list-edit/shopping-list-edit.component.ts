import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  isEditMode = false;
  editemItemIndex: number;
  selectedIngredient: Ingredient;
  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.isEdit.subscribe(
      (index: number) => {
        this.isEditMode = true;
        this.selectedIngredient = this.shoppingService.getIngredientById(index);
        this.editemItemIndex = index;
        this.slForm.setValue({
          ingName: this.selectedIngredient.ingredientName,
          ingAmount: this.selectedIngredient.amount
        });
      }
    );
  }
  onAdd(form: NgForm) {
    const ingredient = new Ingredient(form.value.ingName, form.value.ingAmount);
    if (this.isEditMode) {
      this.shoppingService.updateIngredient(ingredient, this.editemItemIndex);
    } else {
      this.shoppingService.addNewIngredient(ingredient);
    }
    this.clear();
  }

  clear() {
    this.slForm.reset();
    this.isEditMode = false;
    this.editemItemIndex = null;
  }

  delete() {
    this.clear();
    this.shoppingService.deleteIngredient(this.editemItemIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
