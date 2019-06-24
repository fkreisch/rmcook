import { Cooking } from './../interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Recipe } from '../interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  recipeDoc: AngularFirestoreDocument<Recipe>;

  constructor(public afs: AngularFirestore) {
    this.recipesCollection = afs.collection<Recipe>('recipes', ref => ref.orderBy('name', 'asc'));
  }

  getRecipes() {
    this.recipes = this.recipesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        console.log ('BUILD - Recipes', data);
        return { ...data };
      }))
    );
    return this.recipes;
  }

  addRecipe(recipe: any, cooking: any, ingredients: any) {
    const mergedObj = {...recipe, ...cooking, ...ingredients};
    this.recipesCollection.add(mergedObj);
    console.log ('ADD - Recipes', mergedObj);
  }

  deleteRecipe(recipeid: any) {
    this.recipeDoc = this.afs.doc(`recipes/${recipeid}`);
    this.recipeDoc.delete();
    console.log ('DELETE - Recipes', recipeid);
  }

  updateRecipe(recipeid: any, recipe: Recipe) {
    this.recipeDoc = this.afs.doc(`recipes/${recipeid}`);
    this.recipeDoc.update(recipe);
    console.log ('UPDATE - Recipes');
  }
}
