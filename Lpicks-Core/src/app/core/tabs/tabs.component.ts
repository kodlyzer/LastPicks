import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

@Input() tabs:Tabs;
  constructor() { }

  ngOnInit() {
  }
}


