import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filterByType(event: any) {
    let type: String = event.target.innerText;
    this.router.navigate(['/pokemons','search'], { queryParams: {type: type}});


  }


}
