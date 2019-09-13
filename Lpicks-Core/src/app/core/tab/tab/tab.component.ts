import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../../tab/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit{

  @Input() tabTitle;

  constructor(private tabsComponent: TabsComponent) { }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}