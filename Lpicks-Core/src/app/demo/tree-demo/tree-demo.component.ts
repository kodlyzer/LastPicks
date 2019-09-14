import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {
  item: TreeItem;
  link: string;
  treeItems: TreeItem[] = [
    {
      displayName: 'Kongsberg',
      route: 'kongsberg',
      icon: 'box',
      children: [
        {
          displayName: 'Oil and Gas',
          route: 'kongsberg/oil_and_gas',
          icon: 'box',
          children: [
            {
              displayName: 'Oil',
              route: 'kongsberg/oil_and_gas/oil',
              icon: 'box',
            },
            {
              displayName: 'Gas',
              route: 'kongsberg/oil_and_gas/gas',
              icon: 'box',
            }
          ]
        }
      ]
    },
    {
      displayName: 'Maritime',
      route: 'maritime',
      icon: 'box',
      children: [
        {
          displayName: 'Simulation',
          route: 'maritime/simulation',
          icon: 'box',
          children: [
            {
              displayName: 'k-spice',
              route: 'maritime/simulation/k_spice',
              icon: 'box'
            }
          ]
        },
        {
          displayName: 'Digital Twin',
          route: 'maritime/digital_twin',
          icon: 'box'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  handler(item: TreeItem) {
    this.item = item;
  }

  handlerLink(link: string) {
    this.link = link;
  }
  get TreeItems() {
    return JSON.stringify(this.treeItems, null, 2);
  }

  set TreeItems(v) {
    try {
      this.treeItems = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
