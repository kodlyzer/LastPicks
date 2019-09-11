import {NgModule} from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
const COMP=[TabsDemoComponent];
@NgModule({
imports:[CoreModule],
declarations:[...COMP],
exports:[...COMP]
})
export class DemoModule{}