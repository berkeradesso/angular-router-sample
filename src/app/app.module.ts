import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TrainerListComponent,
    PokemonDetailsComponent,
    TrainerDetailsComponent,
    SearchListComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
