import { NgModule } from '@angular/core';
import { TableModule } from './table/table.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';


const MODULES = [TableModule, DropdownModule, ClickOutsideModule];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CoreModule { }
