import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interface';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit {

  public recipes: Recipe[];
  modalRef: BsModalRef;

  recipeForm = new FormGroup({
    picture: new FormControl(),
    name: new FormControl(),
    short: new FormControl(),
    long: new FormControl(),
    extra: new FormControl(),
    serve: new FormControl(),
  });
  cookingForm = new FormGroup({
    cooking: new FormControl(),
  });
  ingredientsForm = new FormGroup({
    ingredients: new FormControl(),
  });

  constructor(private recipesService: RecipesService, private modalService: BsModalService) { }

  openModal(recipeedit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(recipeedit);
  }

  ngOnInit() {
      this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
      console.log (recipes);
    });
  }

  makePost() {
    console.log ('Küldjük a service-nek:', this.recipeForm.value, this.cookingForm.value, this.ingredientsForm.value);
    this.recipesService.addRecipe(this.recipeForm.value, this.cookingForm.value, this.ingredientsForm.value);
    this.modalRef.hide();
  }

  makeDelete(event: any, recipeid: any) {
    this.recipesService.deleteRecipe(recipeid);
    this.modalRef.hide();
  }

  makeUpdate(event: any, recipeid: any) {
    this.recipesService.updateRecipe(recipeid, this.recipeForm.value);
    this.modalRef.hide();
  }

}
