import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('mouseover') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseout') toggleDropdown2(){
    this.isOpen = !this.isOpen;
}
}
