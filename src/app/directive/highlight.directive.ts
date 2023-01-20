import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'cyan';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.borderColor') borderColor = 'black';

  colors: string[] = [
    'pink',
    'purple',
    'white',
    'yellow',
    'red',
    'black',
    'coral',
    'blue',
    'green',
  ];

  constructor() {}

  @HostListener('keypress') changeColor() {
    const index1 = Math.floor(Math.random() * (this.colors.length - 1));
    const index2 = Math.floor(Math.random() * (this.colors.length - 1));
    const index3 = Math.floor(Math.random() * (this.colors.length - 1));
    this.color = this.colors[index1];
    this.borderColor = this.colors[index2];
    this.backgroundColor = this.colors[index3];
  }
}
