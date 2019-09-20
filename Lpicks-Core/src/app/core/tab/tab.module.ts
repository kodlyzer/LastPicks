import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';


@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabsComponent
  ]
})
export class TabModule { }