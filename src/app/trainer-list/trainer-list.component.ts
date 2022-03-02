import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent {
  trainers = [
    {
      id: 1,
      name: 'Ash'
    },
    {
      id: 2,
      name: 'Misty'
    },
    {
      id: 3,
      name: 'Brock'
    }
  ];
}
