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
  @Input() split = false;
  @Input() theme = 'primary';
  @Input() css: {};
  @Output()
  public getClickPath = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(item: string) {
    this.getClickPath.emit(item);
  }
}
