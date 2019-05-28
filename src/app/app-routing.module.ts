import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCardDeckComponent } from './recipe-card-deck/recipe-card-deck.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [

  { 
    path: '',
    component: RecipeCardDeckComponent
  },
  {
    path:  'recipe-card-deck',
    component:  RecipeCardDeckComponent
  },
  {
    path:  'recipe-all',
    component:  RecipeAllComponent
  },
  {
    path:  'settings',
    component:  SettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
