import { NgModule } from '@angular/core';
import { TableModule } from './table/table.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { ModalModule } from './modal/modal.module';
import { HeaderModule } from './header/header.module';
import { CardModule } from './card/card.module';
import { TreeModule } from './tree/tree.module';
import { TabModule } from './tab/tab.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { StopPropogationModule } from './stop-propogation/stop-propogation.module';

const MODULES = [DropdownModule, ClickOutsideModule, ModalModule, HeaderModule, CardModule, StopPropogationModule,
    TabModule, TreeModule, TableModule];


@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    declarations: []
})
export class CoreModule {

}
