import { NgModule } from '@angular/core';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { CoreModule } from '../core/core.module';
const COMPONENTS = [DemoModalComponent];
@NgModule({
    imports: [CoreModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule {
 }
