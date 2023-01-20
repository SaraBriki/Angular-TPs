import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [],
})
export class ChildComponent implements OnInit {
  @Input() myFavoriteColor: string = 'pink';
  @Output() sendColor = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendToParent() {
    this.sendColor.emit(this.myFavoriteColor);
  }
}
