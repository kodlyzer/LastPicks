import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { ClickOutsideDirective } from './clickOutside.directive';

@NgModule({
  declarations: [
    DropdownComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
