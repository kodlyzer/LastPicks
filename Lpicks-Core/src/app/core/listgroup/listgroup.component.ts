import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent implements OnInit {
  @Input() listgroup: Listgroup[];

  constructor() { }

  ngOnInit() {

  }
}


