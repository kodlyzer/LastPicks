import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-list-group-demo',
  templateUrl: './listgroup-demo.component.html',
  styleUrls: ['./listgroup-demo.component.scss']
})
export class ListgroupDemoComponent implements OnInit {
  listGroup = {
    listTitle: 'Header',
    listitems: [{
      listName: 'Pacific Drilling',
      listLink: '#',
      listSelected: true,
      badgeNumber: 2,
      metadata: '25 minutes ago',
    },
    {
      listName: 'Floatel test',
      listLink: '#',
      listSelected: false,

    },
    {
      listName: 'Pacific Drilling',
      listLink: '#',
      badgeNumber: 2,
      
    }]
  };

  constructor() { }

  ngOnInit() {
  }
handler(seletedList:Listgroup)
{
console.log(seletedList);
}
}
