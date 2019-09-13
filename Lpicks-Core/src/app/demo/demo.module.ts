import {NgModule} from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
const COMPONENTS=[TabsDemoComponent,DropdownDemoComponent];
@NgModule({
imports:[CoreModule],
declarations:[...COMPONENTS],
exports:[...COMPONENTS]
})
export class DemoModule{}
