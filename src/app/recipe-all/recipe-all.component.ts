import { Component, TemplateRef, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interface';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})

export class RecipeAllComponent implements OnInit {

  public recipes: Recipe[];

  constructor(
    private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
}
