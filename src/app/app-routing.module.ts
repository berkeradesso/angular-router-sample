import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {TrainerListComponent} from "./trainer-list/trainer-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {HomeComponent} from "./home/home.component";
import {SearchListComponent} from "./search-list/search-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
 {path: '', component: HomeComponent},
  {path: 'trainers', component: TrainerListComponent},
  // TODO 1: Sayfalarımızın register işlemi
  /*
  {path: 'pokemons', component: PokemonListComponent, children: [
      {path: ':type/:name', component: PokemonDetailsComponent},
      {path: 'search', component: SearchListComponent}
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
