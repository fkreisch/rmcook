// MODULES

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RecipeCardDeckComponent } from './recipe-card-deck/recipe-card-deck.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { SettingsComponent } from './settings/settings.component';
import { AskComponent } from './ask/ask.component';
import { LinksDisplayComponent } from './links-display/links-display.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

// SERVICES

import { LinksService } from './services/links.service';
import { RecipesService } from './services/recipes.service';

// OTHER

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    RecipeCardDeckComponent,
    RecipeAllComponent,
    SettingsComponent,
    AskComponent,
    LinksDisplayComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
  ],
  providers: [
    LinksService,
    RecipesService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
