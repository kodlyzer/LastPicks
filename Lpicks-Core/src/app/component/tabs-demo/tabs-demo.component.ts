import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-tabs-demo',
  templateUrl: './tabs-demo.component.html',
  styleUrls: ['./tabs-demo.component.sass']
})
export class TabsDemoComponent implements OnInit {
  // demotabs="KOGNIFAI DESIGN SYSTEM";
 arr = {
    items: [
    {
      "txt": "Home",
      "href": "#",
      "active": true,
      "icon": {
        "size": "base",
        "symbol": "box"
      }
    },
    {
      "txt": "Applications",
      "href": "#"
    },
    {
      "txt": "GSN Management",
      "href": "#"
    },
    {
      "txt": "Node Offshore",
      "href": "#"
    },
    {
      "txt": "Shipping",
      "href": "#"
    },
    {
      "txt": "Tracking",
      "href": "#"
    }
  ]
}
  constructor() { }

  ngOnInit() {
  }

}
