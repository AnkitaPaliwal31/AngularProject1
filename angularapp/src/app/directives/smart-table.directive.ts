import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmartTable]'
})
export class SmartTableDirective {

  constructor() { }
  @HostBinding('style.color') color!: string;
  @HostBinding('style.background-color') backgroundColor!: string;
  @HostBinding('style.font-size') fontSize!: string;
  @HostListener('mouseover') onMouseOver() {
     this.backgroundColor = 'yellow';
     this.color ='black';
     this.fontSize='20px';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'white';
    this.color ='black';
    this.fontSize='16px';
 }
}
