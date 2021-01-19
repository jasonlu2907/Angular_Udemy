import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../share/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Yellow birthday cupcakes', 'Sour cream, cake flour', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-birthday-cupcakes-chocolate-frosting-600x900.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
