import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kdi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lpicks-Core';
  badge = {
    color: "navy",
    label: "Home"
  }
  navItems: TreeItem[] = [
    {
      displayName: 'DropDown',
      route: 'dropdown',
      routelink: 'dropdown'
    },
    {
      displayName: 'Tree',
      route: 'tree',
      routelink: 'tree'
    },
    {
      displayName: 'Card',
      route: 'card',
      routelink: 'card'
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
      displayName: 'Header',
      route: 'header',
      routelink: 'header'
    },
    {
      displayName: 'Modal',
      route: 'modal',
      routelink: 'modal'
    },
    {
      displayName: 'Icon',
      route: 'icon',
      routelink: 'icon'
    },
    {
      displayName: 'Badge',
      route: 'badge',
      routelink: 'badge'
    }
  ];

  constructor(private router: Router) {
  }

  handler(link: string) {
    if (typeof link !== 'undefined') {
      this.router.navigate([link]);
    }
  }
  onSelect() {
    this.router.navigate(["home"]);
  }
}
