import { NgModule } from '@angular/core';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { CoreModule } from '../core/core.module';
import { NavDemoComponent } from './nav-demo/nav-demo.component';

const COMPONENTS = [DropdownDemoComponent, NavDemoComponent];

@NgModule({
    imports: [CoreModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
