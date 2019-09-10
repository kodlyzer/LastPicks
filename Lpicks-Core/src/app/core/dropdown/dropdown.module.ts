import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { ClickOutsideModule } from '../click-outside/click-outside.module';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
