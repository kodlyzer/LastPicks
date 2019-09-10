import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listgroup, ListgroupComponent } from './listgroup.component';

@NgModule({
  declarations: [
    ListgroupComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    ListgroupComponent
  ]
})

export class ListGroupModule { }