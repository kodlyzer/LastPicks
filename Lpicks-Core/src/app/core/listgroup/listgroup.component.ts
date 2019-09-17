import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kdi-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent implements OnInit {
  @Input() listgroup: Listgroup[];
  @Input() actAsButtons = false;
  @Output() selectedList: EventEmitter<Listgroup> = new EventEmitter<Listgroup>();

  constructor() { }

  ngOnInit() {
    console.log('act as buttons from parent', this.actAsButtons);
  }

  // actAsAButton(listSelected) {
  //   this.listSelected== true;
  // }
}


