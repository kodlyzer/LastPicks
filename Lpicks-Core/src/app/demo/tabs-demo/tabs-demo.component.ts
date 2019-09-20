import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-tabs-demo',
  templateUrl: './tabs-demo.component.html',
  styleUrls: ['./tabs-demo.component.scss']
})
export class TabsDemoComponent implements OnInit {

  arr = {
    items: [
      {
        theme: 'foam',
        classes: null,
        txt: 'Home',
        href: '#',
        active: false,
        icon: {
          size: 'base',
          symbol: 'box'
        }
      },
      {
        txt: 'Applications',
        href: '#',
      },
      {
        txt: 'GSN Management',
        href: '#'
      },
      {
        txt: 'Node Offshore',
        href: '#'
      },
      {
        txt: 'Shipping',
        href: '#'
      },
      {
        txt: 'Tracking',
        href: '#'
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
