import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: [],
})
export class BusinessCardComponent implements OnInit {
  person: Person = new Person();

  constructor() {}

  ngOnInit(): void {}

  onChange(person: any) {
    this.person = new Person({ ...person });
  }
}
