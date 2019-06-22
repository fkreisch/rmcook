import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCardDeckComponent } from './recipe-card-deck/recipe-card-deck.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { SettingsComponent } from './settings/settings.component';
import { LinksDisplayComponent } from './links-display/links-display.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipe-all',
    component: RecipeAllComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'links-admin',
    component: SettingsComponent
  },
  {
    path: 'ask',
    component: AskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
