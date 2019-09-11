import { NgModule } from '@angular/core';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { CoreModule } from '../core/core.module';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';

const COMPONENTS = [DropdownDemoComponent,DemoCardComponent];

@NgModule({
    imports: [CoreModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
