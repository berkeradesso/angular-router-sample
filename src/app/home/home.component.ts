import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  //TODO 4: Query param göndermek ve sayfalar arası navigasyon
  filterByType(event: any) {
  /*  let type: String = event.target.innerText;
    this.router.navigate(['/pokemons','search'], { queryParams: {type: type}});
  */
  }

  onLogin() {
    this.authService.login()
  }

  onLogout() {
    this.authService.logout()
  }

}
