import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdi-demo-icon',
  templateUrl: './demo-icon.component.html',
  styleUrls: ['./demo-icon.component.scss']
})
export class DemoIconComponent implements OnInit {

  iconName1 = "box";
  iconName2 = "angle-left";
  iconName3 = "bookmark";
  iconName4 = "search";
  constructor() { }

  ngOnInit() {
  }
  get Icon() {
    return JSON.stringify(this.iconName1, null, 2);
  }

  set Icon(v) {
    try {
      this.iconName1 = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }

}
