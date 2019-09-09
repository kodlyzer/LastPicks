import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'kdi-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  open = false;
  @Input() dropdown: Dropdown;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.open = false;
  }
}
export interface Dropdown {
  title: string;
  items: [];
}
