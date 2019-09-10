import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() tablecontent: TableContent;

  constructor() { }

  ngOnInit() {
  }
  arrayN(item: string[], n: number): string[] {
    return item.slice(0 ,n);
  }

}
