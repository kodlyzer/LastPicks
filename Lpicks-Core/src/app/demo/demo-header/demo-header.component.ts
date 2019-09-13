import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-demo-header',
  templateUrl: './demo-header.component.html',
  styleUrls: ['./demo-header.component.scss']
})
export class DemoHeaderComponent implements OnInit {
  demoheader = {
    hname: 'Shruta',
    icon: 'maritime-offshore-white'
  };

  constructor() { }

  ngOnInit() {
  }

}
