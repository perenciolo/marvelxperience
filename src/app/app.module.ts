import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdProgressBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CharactersService } from './shared/characters.service';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavbarDefaultComponent } from './navbar-default/navbar-default.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { CharactersComponent } from './home/characters/characters.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './detail/character/character.component';
import { InterfaceComponent } from './detail/character/interface/interface.component';
import { ComicsRelatedComponent } from './detail/character/comics-related/comics-related.component';
import { DialogComicsComponent } from './detail/character/comics-related/dialog-comics/dialog-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    NavbarDefaultComponent,
    HeroSectionComponent,
    CharactersComponent,
    HomeComponent,
    CharacterComponent,
    InterfaceComponent,
    ComicsRelatedComponent,
    DialogComicsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    FlexLayoutModule,
    MdProgressBarModule,
    routing,
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
