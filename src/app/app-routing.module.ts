import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeHomeComponent } from './recipe/recipe-home/recipe-home.component';

const routes: Routes = [
{ path: '', redirectTo: '/recipes' , pathMatch:'full'},
{ path : 'recipes', component : RecipesComponent , 
  children : [{
    path : '', component : RecipeHomeComponent
  },
  {
    path : ':id', component : RecipeDetailComponent
  } ]
},
{ path: 'shopping-list', component: ShoppingListComponent },
{ path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
