import { NgModule } from '@angular/core';
import { TableModule } from './table/table.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { StopPropogationModule } from './stop-propogation/stop-propogation.module';
import { TreeModule } from './tree/tree.module';
import { TabModule } from './tab/tab.module';
import { CardModule } from './card/card.module';


const MODULES = [
    DropdownModule,
    ClickOutsideModule,
    TreeModule,
    StopPropogationModule,
    TabModule,
    CardModule,TableModule, DropdownModule, ClickOutsideModule
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    declarations: []
})
export class CoreModule {

}