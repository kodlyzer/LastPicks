import { NgModule } from '@angular/core';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { CoreModule } from '../core/core.module';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
const COMPONENTS = [DemoModalComponent, DropdownDemoComponent,DemoHeaderComponent];





@NgModule({
    imports: [CoreModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
