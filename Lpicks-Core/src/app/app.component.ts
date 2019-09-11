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
      route: 'dropdown'
    },
    {
      displayName: 'Nav',
      route: 'navbar'
    }
  ];

  constructor(private router: Router) {

  }

  handler(path: string) {
    this.router.navigate([path]);
  }
}
