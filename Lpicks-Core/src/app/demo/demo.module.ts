import { NgModule } from '@angular/core';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { CoreModule } from '../core/core.module';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';
const COMPONENTS = [DemoModalComponent, DropdownDemoComponent, DemoHeaderComponent, PageComponent, DemoCardComponent];









@NgModule({
    imports: [CoreModule, FormsModule, CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
