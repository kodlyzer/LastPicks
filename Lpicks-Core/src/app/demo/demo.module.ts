import { NgModule } from '@angular/core';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { CoreModule } from 'src/app/core/core.module';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';

const COMPONENTS = [DemoTableComponent, DropdownDemoComponent];

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
