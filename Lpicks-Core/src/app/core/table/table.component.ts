import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  objectKeys = Object.keys;
  
  @Input() tablecontent: TableContent;

  styles = {
    simple: "kx-table kx-table--fit-tight kx-ui",
    singleLine: "kx-table kx-table--fit-container kx-table--hover kx-table--rows kx-ui",
    doubleline: "kx-table kx-table--fit-tight kx-table--rows kx-ui",
    compacttable: "kx-table kx-table--fit-tight kx-table--rows kx-ui",
    themefoam: "kx-table kx-table--fit-tight kx-ui",
    teal: "kx-table kx-table--fit-tight kx-ui",
    border: "kx-table kx-table--fit-tight kx-table--border kx-ui",
    rowborders: "kx-table kx-table--fit-tight kx-table--rows kx-ui",
    columnborders: "kx-table kx-table--fit-tight kx-table--cols kx-ui",
    zebrastriped: "kx-table kx-table--fit-tight kx-table--zebra kx-ui",
    highlightonhover: "kx-table kx-table--fit-tight kx-table--highlight kx-ui",
    fluid: "kx-table kx-table--fit-tight kx-table--fluid kx-ui",
    fitloose: "kx-table kx-table--fit-loose kx-table--border kx-table--highlight kx-table--rows kx-ui"
  }
  constructor() { }

  ngOnInit() {
  }
  //It is used to remove the extra fields if user accidentally adds more fields to a particular row
  // than the number of headers. suppose there are 3 columns
  //and in JS object users sends 4 fields it just displays 3 fields and omits the 4th field.
  arrayN(item: string[], n: number): string[] {
    return item.slice(0, n);
  }

  check(key: string) {
    if (typeof key === 'undefined') {
      return false;
    }
    return true;
  }
}
