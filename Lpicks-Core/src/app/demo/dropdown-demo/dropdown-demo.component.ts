import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'kdi-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss'],
})
export class DropdownDemoComponent implements OnInit {

  path: string;
  dropdown = {
    title: 'Courses',
    items: [
      {
        icon: 'box',
        link: '#',
        name: 'Java',
        sub: [
          {
            icon: 'box',
            link: '#',
            name: 'Spring',
            sub: [
              {
                link: '#',
                name: 'Applets'
              },
              {
                icon: 'papers',
                link: '#',
                name: 'JFrame'
              }
            ]
          },
          {
            link: '#',
            name: 'Swing'
          }
        ]
      },
      {
        icon: 'papers',
        link: '#',
        name: '.Net',
        sub: [
          {
            link: '#',
            name: 'FrameWork'
          },
          {
            link: '#',
            name: 'Core'
          }
        ]
      },
      {
        icon: 'success',
        link: '#',
        name: 'C++'
      },
      {
        icon: 'danger',
        link: '#',
        name: 'Python',
        sub: [
          {
            link: '#',
            name: 'Djanjo'
          },
          {
            link: '#',
            name: 'Tkinter'
          }
        ]
      },
      {
        icon: 'info',
        link: '#',
        name: 'Javascript'
      },
    ]
  };

  css = {
    // tslint:disable-next-line: object-literal-key-quotes
    'color': '#ffffff',
    // tslint:disable-next-line: object-literal-key-quotes
    'background': '#0385cb'
  };

  constructor() { }

  ngOnInit() {
  }
  handler(path: string) {
    this.path = path;
  }
}
