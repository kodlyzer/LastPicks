import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() header: { hname: string, icon?: string };
  dropdown = {
    title: 'Profile Setiings',
    items: [
      {
        icon: 'box',
        link: '#',
        name: 'My Profile',
        sub: [ ]
      },
      {
        icon: 'papers',
        link: '#',
        name: 'Notification Settings',
        sub: [ ]
      },
      {
        icon: 'success',
        link: '#',
        name: 'Security'
      },
      {
        icon: 'danger',
        link: '#',
        name: 'Usage',
        sub: [ ]
      },
      {
        icon: 'info',
        link: '#',
        name: 'Logout'
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
