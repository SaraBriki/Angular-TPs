import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Model/Person';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: [],
})
export class CardViewComponent implements OnInit {
  @Input() person: Person = new Person();

  constructor() {}

  ngOnInit(): void {}
}
