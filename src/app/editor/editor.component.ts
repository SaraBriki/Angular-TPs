import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word-editor',
  templateUrl: './editor.component.html',
  styleUrls: [],
})
export class EditorComponent implements OnInit {
  @Input() color: string = '#05095c';
  size: string = '20px';
  fonts: string[] = ['serif', 'arial', 'sans serif'];
  fontFamily: string = 'Times';

  constructor() {}

  ngOnInit(): void {}
}
