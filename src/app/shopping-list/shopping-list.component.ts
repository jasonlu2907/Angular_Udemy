import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../share/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('trung', 5),
    new Ingredient('ca chua', 12)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
