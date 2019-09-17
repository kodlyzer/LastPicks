import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';


const MODULES = [DropdownModule, ClickOutsideModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: []
})
export class CoreModule { }
