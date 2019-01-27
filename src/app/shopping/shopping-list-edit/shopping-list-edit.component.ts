import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('amountInput')  amountRef : ElementRef;
  @ViewChild('ingredientNameInput')  ingRef : ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    const ingredient = new Ingredient(this.ingRef.nativeElement.value,this.amountRef.nativeElement.value)
    this.addedIngredient.emit(ingredient);
  }
}
