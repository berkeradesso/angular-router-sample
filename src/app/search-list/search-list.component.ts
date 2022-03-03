import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  type: string = '';
  pokemons = [
    {
      id: 1,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      id: 1,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      id: 2,
      name: 'Onix',
      type: 'Rock',
    },
    {
      id: 3,
      name: 'Psyduck',
      type: 'Water'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  //TODO 5: Query paramları fetch etme
  ngOnInit(): void {
  /*  this.route.queryParams.subscribe((queryParam: Params) => {
      this.type = queryParam['type']
    })
*/
  }

}
