import {NgModule} from '@angular/core';
import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ClickOutsideModule } from './click-outside/click-outside.module';
const MODULE=[TabsModule,DropdownModule, ClickOutsideModule];
@NgModule({
    imports:[...MODULE],
    exports:[...MODULE]
})
export class CoreModule{
    
}