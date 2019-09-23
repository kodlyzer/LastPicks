import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kdi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lpicks-Core';

  navItems: TreeItem[] = [
    {
      displayName: 'Card',
      route: 'card',
      routelink: 'card'
    },
    {
      displayName: 'DropDown',
      route: 'dropdown',
      routelink: 'dropdown'
    },
    {
      displayName: 'Header',
      route: 'header',
      routelink: 'header'
    },
    {
      displayName: 'ListGroup',
      route: 'listgroup',
      routelink: 'listgroup'
    },
    {
      displayName: 'Modal',
      route: 'modal',
      routelink: 'modal'
    },
    {
      displayName: 'Tab',
      route: 'tab',
      routelink: 'tab'
    },
    {
      displayName: 'Table',
      route: 'table',
      routelink: 'table'
    },
    {
      displayName: 'Tree',
      route: 'tree',
      routelink: 'tree'
    }
  ];

  constructor(private router: Router) {
  }

  handler(link: string) {
    if (typeof link !== 'undefined') {
      this.router.navigate([link]);
    }
  }
}
