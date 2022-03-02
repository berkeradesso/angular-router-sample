import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons = [
    {
      id: 1,
      name: 'Pikachu'
    },
    {
      id: 2,
      name: 'Onyx'
    },
    {
      id: 3,
      name: 'Psyduck'
    }
  ];
}


