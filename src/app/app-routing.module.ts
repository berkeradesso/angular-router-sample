import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {TrainerListComponent} from "./trainer-list/trainer-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {HomeComponent} from "./home/home.component";
import {SearchListComponent} from "./search-list/search-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemons', component: PokemonListComponent, children: [
      {path: ':type/:name', component: PokemonDetailsComponent},
      {path: 'search', component: SearchListComponent}

    ]},
  {path: 'trainers', component: TrainerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
