import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/share/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Yellow birthday cupcakes', 'Sour cream, cake flour', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-birthday-cupcakes-chocolate-frosting-600x900.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
