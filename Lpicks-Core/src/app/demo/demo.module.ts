import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoTableComponent } from './demo-table/demo-table.component';

import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { ListgroupDemoComponent } from './listgroup-demo/listgroup-demo.component';
import { LivePageComponent } from './live-page/live-page.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DemoIconComponent } from './demo-icon/demo-icon.component';
import { DemoBadgeComponent } from './demo-badge/demo-badge.component';



const COMPONENTS = [DemoModalComponent, DropdownDemoComponent, DemoHeaderComponent, PageComponent, DemoCardComponent, TreeDemoComponent,
    LivePageComponent, ListgroupDemoComponent,
    TabsDemoComponent, DemoTableComponent];

@NgModule({
    imports: [CoreModule, FormsModule, CommonModule],
    declarations: [...COMPONENTS, DemoIconComponent, DemoBadgeComponent],
    exports: [...COMPONENTS]
})
export class DemoModule { }
