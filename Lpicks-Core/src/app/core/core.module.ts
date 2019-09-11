import { NgModule } from '@angular/core';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { CardModule } from './card/card.module';

const MODULES = [DropdownModule, ClickOutsideModule,CardModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class CoreModule { }
