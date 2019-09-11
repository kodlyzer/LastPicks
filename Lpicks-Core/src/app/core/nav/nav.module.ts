import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

const COMPONENTS = [NavComponent, NavItemComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class NavModule { }
