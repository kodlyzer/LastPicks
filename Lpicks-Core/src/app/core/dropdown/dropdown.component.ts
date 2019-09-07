import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'kdi-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
  // host: { '(document:click)': 'handleClick($event)' }
})
export class DropdownComponent implements OnInit {
  open = false;
  @Input() dropdown: { title: string, items: []};

  constructor() {
  }

  ngOnInit() {
  }
  close() {
    this.open = false;
  }
}
