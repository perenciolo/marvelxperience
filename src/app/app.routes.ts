import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './detail/character/character.component';
import { DialogComicsComponent } from './detail/character/comics-related/dialog-comics/dialog-comics.component';

const APP_ROUTES: Routes = [
    { path: 'character/:id', component: CharacterComponent },
    { path: 'comics/:id', component: DialogComicsComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
