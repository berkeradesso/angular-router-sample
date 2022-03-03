import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonName: string = '';
  pokemonType: string = '';


  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.params['name'];
    this.pokemonType = this.route.snapshot.params['type']


    this.route.params
      .subscribe(
        (param: Params) => {
          this.pokemonName = param['name'];
          this.pokemonType = param['type'];
        }
      );

  }

}
