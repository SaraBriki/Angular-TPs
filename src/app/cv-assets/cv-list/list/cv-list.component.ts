import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../Model/Person';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: [],
})
export class CvListComponent implements OnInit {
  @Input() profiles: Person[] = [];

  constructor() {}

  ngOnInit(): void {}
}
