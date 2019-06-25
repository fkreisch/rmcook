import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  id: string;
  public recipe: Recipe;
  public sub: any;

  recipeForm = new FormGroup({
    picture: new FormControl(),
    name: new FormControl(),
    short: new FormControl(),
    long: new FormControl(),
    extra: new FormControl(),
    serve: new FormControl(),
  });

  cookingForm = new FormGroup({
    steps: new FormControl(),
  });

  constructor(
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log('Ez az ID:', params.id);
      this.sub = params.id;
    });

    this.recipesService.getRecipe(this.sub).subscribe(rec => {
      this.recipe = rec;
      console.log('Ezt kapjuk vissza:', this.recipe);
    });

    this.cookingForm = this.formBuilder.group({
      steps: this.formBuilder.array([])
    });
  }

  get stepForm() {
    return this.cookingForm.get('steps') as FormArray;
  }

  addStep() {
    const step = this.formBuilder.group({
      stepContent: [],
    });

    this.stepForm.push(step);
  }

  deleteStep(i: number) {
    this.stepForm.removeAt(i);
  }

  makePost() {
    console.log('MAKE POST - Küldjük a service-nek:', this.recipeForm.value, this.cookingForm.value);
    this.recipesService.addRecipe(this.recipeForm.value, this.cookingForm.value);
  }

  makeDelete(event: any, recipeid: any) {
    this.recipesService.deleteRecipe(recipeid);
  }

  makeUpdate(event: any, recipeid: any) {
    this.recipesService.updateRecipe(recipeid, this.recipeForm.value);
  }
}
