import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DemoCardComponent } from './demo-card-demo/demo-card.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { ListgroupDemoComponent } from './listgroup-demo/listgroup-demo.component';
import { LivePageComponent } from './live-page/live-page.component';
import { PageComponent } from './page/page.component';
import { TabsDemoComponent } from './tabs-demo/tabs-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
const COMPONENTS = [DemoModalComponent, DropdownDemoComponent, DemoHeaderComponent, PageComponent, DemoCardComponent,TreeDemoComponent,
    LivePageComponent, ListgroupDemoComponent,
    TabsDemoComponent];

@NgModule({
    imports: [CoreModule, FormsModule, CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
