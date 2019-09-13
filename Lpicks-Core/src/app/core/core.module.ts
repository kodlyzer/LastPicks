import {NgModule} from '@angular/core';
// import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { TabModule } from './tab/tab.module';
import { CardModule } from './card/card.module';

const MODULES = [TabModule,DropdownModule, ClickOutsideModule, CardModule];

@NgModule({
    imports:[...MODULES],
    exports:[...MODULES],
    declarations: []
})
export class CoreModule{
    
}