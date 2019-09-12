import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DropdownComponent } from 'src/app/core/dropdown/dropdown.component';

@Component({
  selector: 'kdi-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss']
})
export class LivePageComponent implements OnInit {
  @ViewChild('adhost', { read: ViewContainerRef }) entry: ViewContainerRef;
  name: string;
  data: any;
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

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // this.entry.clear();
    // const factory = this.resolver.resolveComponentFactory(DropdownComponent);
    // const componentRef = this.entry.createComponent(factory);
    // componentRef.instance.dropdown = this.dropdown;
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
