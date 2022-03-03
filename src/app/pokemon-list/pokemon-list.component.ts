import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons = [
    {
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      name: 'Onix',
      type: 'Rock',
    },
    {
      name: 'Psyduck',
      type: 'Water'
    }
  ];

}


