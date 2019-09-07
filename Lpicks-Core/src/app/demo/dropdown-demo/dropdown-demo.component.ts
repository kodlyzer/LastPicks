import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'kdi-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss'],
})
export class DropdownDemoComponent implements OnInit {

  dropdown = {
    title: 'Courses',
    items: [
      { link: '#',
        name: 'Java',
        sub: []
      },
      {
        link: '#',
        name: '.Net',
        sub: [
          { link: '#',
            name: 'FrameWork',
            sub: []
          },
          { link: '#',
            name: 'Core',
            sub: []
          }
        ]
      },
      { link: '#',
        name: 'C++',
        sub: []
      },
      {
        link: '#',
        name: 'Python',
        sub: [
          { link: '#',
            name: 'Djanjo',
            sub: []
          },
          { link: '#',
            name: 'Tkinter',
            sub: [] }
        ]
      },
      {
        link: '#',
        name: 'Javascript',
        sub: []
      },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
