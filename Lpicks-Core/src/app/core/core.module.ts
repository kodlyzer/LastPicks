import {NgModule} from '@angular/core';
// import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
import { TabModule } from './tab/tab.module';
const MODULE=[TabModule,DropdownModule, ClickOutsideModule];
@NgModule({
    imports:[...MODULE],
    exports:[...MODULE],
    declarations: []
})
export class CoreModule{
    
}