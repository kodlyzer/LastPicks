import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kdi-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  open = false;
  iconPath = '../../../assets/img/icons/';
  @Input() dropdown: Dropdown;
  @Input() theme = 'primary';
  @Output() getClickPath = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(item: string) {
    this.getClickPath.emit(item);
  }

  toggle() {
    this.open = !this.open;
  }

  outside() {
    this.open = false;
  }
}
