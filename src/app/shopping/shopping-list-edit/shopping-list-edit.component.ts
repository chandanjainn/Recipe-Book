import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('amountInput')  amountRef : ElementRef;
  @ViewChild('ingredientNameInput')  ingRef : ElementRef;


  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
  }
  onAdd(){
    const ingredient = new Ingredient(this.ingRef.nativeElement.value,this.amountRef.nativeElement.value)
    this.shoppingService.addNewIngredient(ingredient);
  }
}
