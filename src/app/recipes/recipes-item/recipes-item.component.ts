import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/share/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
