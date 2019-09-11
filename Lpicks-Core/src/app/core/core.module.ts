import { NgModule } from '@angular/core';
import { TableModule } from './table/table.module';

const MODULES = [TableModule];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class CoreModule { }