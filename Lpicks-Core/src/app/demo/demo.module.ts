import { NgModule } from '@angular/core';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { CoreModule } from 'src/app/core/core.module';

const COMPONENTS = [DemoTableComponent];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CoreModule
  ],
  exports: [...COMPONENTS]
})
export class DemoModule { }