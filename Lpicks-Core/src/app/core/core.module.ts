import { NgModule } from '@angular/core';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { StopPropogationModule } from './stop-propogation/stop-propogation.module';

import { DropdownModule } from './dropdown/dropdown.module';
import { TreeModule } from './tree/tree.module';
import { TabModule } from './tab/tab.module';
import { CardModule } from './card/card.module';


const MODULES = [
    DropdownModule,
    ClickOutsideModule,
    TreeModule,
    StopPropogationModule,
    TabModule,
    CardModule
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    declarations: []
})
export class CoreModule {

}