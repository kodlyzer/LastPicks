import { Component, Input } from '@angular/core';

@Component({
  selector: 'kdi-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  title = 'livedemo';
  model = '';
  snippet: boolean = true;
  constructor() { console.clear(); }

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

  get dropdownValues() {
    return JSON.stringify(this.dropdown, null, 2);
  }
  set dropdownValues(v) {
    try {
      this.dropdown = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
  snippetActionTrue() {
    this.snippet = true;
    console.log(this.snippet);
  }
  snippetActionFalse() {

    this.snippet = false;
    console.log(this.snippet);
  }
  // Submit()
  // {
  //   //console.log(this.model);
  // }
}
