import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';

import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { LivePageComponent } from './live-page/live-page.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';


const COMPONENTS = [
    DropdownDemoComponent,
    TreeDemoComponent,
    LivePageComponent,
    TabsDemoComponent,
    DemoCardComponent,
    PageComponent
];

@NgModule({
    imports: [CoreModule, FormsModule, CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
