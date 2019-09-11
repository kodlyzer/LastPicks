import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { NavModule } from './nav/nav.module';
import { StopPropogationModule } from './stop-propogation/stop-propogation.module';

const MODULES = [DropdownModule, ClickOutsideModule, NavModule, StopPropogationModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CoreModule { }
