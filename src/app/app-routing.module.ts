import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCardDeckComponent } from './recipe-card-deck/recipe-card-deck.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { SettingsComponent } from './settings/settings.component';
import { LinksDisplayComponent } from './links-display/links-display.component';
import { AskComponent } from './ask/ask.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe-card-deck', pathMatch: 'full' },
 
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
  },
  {
    path:  'links-display',
    component:  LinksDisplayComponent
  },
  {
    path:  'ask',
    component:  AskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
