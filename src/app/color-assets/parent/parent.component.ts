import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: [],
})
export class ParentComponent implements OnInit {
  color = 'yellow';

  constructor() {}

  ngOnInit(): void {}

  processColor(message: any) {
    this.color = message;
  }
}
