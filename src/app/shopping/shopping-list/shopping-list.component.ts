import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients : Ingredient[]=[];
  subscription : Subscription;
  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription=this.shoppingService.changedIngredients.
    subscribe(()=>{
      this.ingredients=this.shoppingService.getIngredients();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
