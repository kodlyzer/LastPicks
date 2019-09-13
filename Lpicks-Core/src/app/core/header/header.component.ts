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
        sub: [
          // {
          //   icon: 'box',
          //   link: '#',
          //   name: 'Spring',
          //   sub: [
          //     {
          //       link: '#',
          //       name: 'Applets'
          //     },
          //     {
          //       icon: 'papers',
          //       link: '#',
          //       name: 'JFrame'
          //     }
          //   ]
          // },
          // {
          //   link: '#',
          //   name: 'Swing'
          // }
        ]
      },
      {
        icon: 'papers',
        link: '#',
        name: 'Notification Settings',
        sub: [
          // {
          //   link: '#',
          //   name: 'FrameWork'
          // },
          // {
          //   link: '#',
          //   name: 'Core'
          // }
        ]
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
        sub: [
          // {
          //   link: '#',
          //   name: 'Djanjo'
          // },
          // {
          //   link: '#',
          //   name: 'Tkinter'
          // }
        ]
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
