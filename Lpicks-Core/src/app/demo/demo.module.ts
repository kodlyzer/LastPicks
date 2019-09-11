import { NgModule } from '@angular/core';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { CoreModule } from '../core/core.module';

const COMPONENTS = [DropdownDemoComponent];

@NgModule({
    imports: [CoreModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
