import {NgModule} from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const COMPONENTS=[TabsDemoComponent,DropdownDemoComponent,DemoCardComponent, PageComponent];

@NgModule({
    imports: [CoreModule, FormsModule, CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule{}
