import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopPropogationDirective } from './stop-propogation.directive';

@NgModule({
  declarations: [
    StopPropogationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StopPropogationDirective
  ]
})
export class StopPropogationModule { }
