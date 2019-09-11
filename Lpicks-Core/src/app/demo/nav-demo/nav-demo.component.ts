import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/core/nav/nav-item/nav.service';

@Component({
  selector: 'kdi-nav-demo',
  templateUrl: './nav-demo.component.html',
  styleUrls: ['./nav-demo.component.scss']
})
export class NavDemoComponent implements OnInit {
  path: string;
  navitems: NavItem[] = [
    {
      displayName: 'DropDown',
      route: 'dropdown',
      icon: 'box',
      children: [
        {
          displayName: 'Dropdown Primary',
          route: 'dropdown/dropdownPrimary',
          icon: 'box',
          children: [
            {
              displayName: 'DropDown Primary Normal',
              route: 'dropdown/dropdownPrimary/dropdownPrimaryNormal',
              icon: 'box',
            },
            {
              displayName: 'DropDown Primary Skin',
              route: 'dropdown/dropdownPrimary/dropdownPrimarySkin',
              icon: 'box',
            }
          ]
        }
      ]
    },
    {
      displayName: 'Card',
      route: 'card',
      icon: 'box',
      children: [
        {
          displayName: 'Image Card',
          route: 'card/imageCard',
          icon: 'box',
          children: [
            {
              displayName: 'Small Image Card',
              route: 'card/imageCard/smallImageCard',
              icon: 'box'
            }
          ]
        },
        {
          displayName: 'Title Card',
          route: 'card/titleCard',
          icon: 'box'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  handler(path: string) {
    this.path = path;
    console.log(path);
  }
}
