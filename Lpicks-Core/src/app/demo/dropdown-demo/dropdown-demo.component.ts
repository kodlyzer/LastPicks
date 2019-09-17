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

  constructor() { }

  ngOnInit() {
  }
  handler(path: string) {
    this.path = path;
  }
  get Dropdown() {
    return JSON.stringify(this.dropdown, null, 2);
  }

  set Dropdown(v) {
    try {
      this.dropdown = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
