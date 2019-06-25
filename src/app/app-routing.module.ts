import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { SettingsComponent } from './settings/settings.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { LinksDisplayComponent } from './links-display/links-display.component';
import { RecipeComponent } from './recipe/recipe.component';


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
    path: 'links-display',
    component: LinksDisplayComponent
  },
  {
    path: 'ask',
    component: AskComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    RecipeAllComponent,
    SettingsComponent,
    LinksDisplayComponent,
    AskComponent
  ];
}
