import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kdi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lpicks-Core';

  navitems: NavItem[] = [
    {
      displayName: 'DropDown',
      route: 'dropdown',
      routelink: 'dropdown'
    },
    {
      displayName: 'NavBar',
      route: 'nav',
      routelink: 'navbar'
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
