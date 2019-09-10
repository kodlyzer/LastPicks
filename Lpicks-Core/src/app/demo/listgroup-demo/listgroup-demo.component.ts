import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-dropdown-demo',
  templateUrl: './listgroup-demo.component.html',
  styleUrls: ['./listgroup-demo.component.sass']
})
export class ListgroupDemoComponent implements OnInit {
  Listgroup = {
    listTitle: 'Header',
    listitems: [{
      listName: 'Pacific Drilling',
      listLink: '#',
      listSelected: true,
      badgeNumber: 2
    },
    {
      listName: 'Floatel test',
      listLink: '#',
      listSelected: false,
      
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
