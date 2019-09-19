import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListgroupComponent } from './listgroup.component';

@NgModule({
  declarations: [
    ListgroupComponent,
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    ListgroupComponent
  ]
})

export class ListGroupModule { }
