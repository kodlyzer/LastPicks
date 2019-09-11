import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListgroupDemoComponent } from './listgroup-demo.component';

@NgModule({
  declarations: [
    ListgroupDemoComponent,
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    ListgroupDemoComponent
  ]
})

export class ListGroupModule { }
