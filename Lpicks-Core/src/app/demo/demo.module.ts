import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { LivePageComponent } from './live-page/live-page.component';
import { NavDemoComponent } from './nav-demo/nav-demo.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [DropdownDemoComponent, NavDemoComponent, LivePageComponent];

@NgModule({
    imports: [CoreModule,FormsModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class DemoModule { }
