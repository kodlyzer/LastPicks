import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.sass']
})
export class ListgroupComponent implements OnInit {
  @Input() listgroup: Listgroup[];
  constructor() { }

  ngOnInit() {
    
  }
}
export interface Listgroup {
  listName: string;
  listLink: string;
  listSelected: boolean;
  listTitle: string;
  badgeNumber: number;
}

