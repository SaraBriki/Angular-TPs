import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../../Model/Person';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: [],
})
export class CardInputComponent implements OnInit {
  person: Person = new Person();
  @Output() updateProfile = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  processUpdate(event: any) {
    this.person = new Person({
      ...this.person,
      [event.target.name]: event.target.value,
    });
    this.updateProfile.emit(this.person);
  }
}
