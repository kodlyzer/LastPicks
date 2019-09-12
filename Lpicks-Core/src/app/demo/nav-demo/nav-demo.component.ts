import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-nav-demo',
  templateUrl: './nav-demo.component.html',
  styleUrls: ['./nav-demo.component.scss']
})
export class NavDemoComponent implements OnInit {
  item: NavItem;
  link: string;
  navitems: NavItem[] = [
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

  handler(item: NavItem) {
    this.item = item;
  }

  handlerLink(link: string) {
    this.link = link;
  }
}
