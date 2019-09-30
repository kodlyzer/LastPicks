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
import { ListGroupModule } from './listgroup/listgroup.module';
import { InputFieldsModule } from './input-fields/input-fields.module';

const MODULES = [DropdownModule, ClickOutsideModule, ModalModule, HeaderModule, CardModule, StopPropogationModule,
    TabModule, TreeModule, TableModule, ListGroupModule, InputFieldsModule];


@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
    declarations: []
})
export class CoreModule {

}
