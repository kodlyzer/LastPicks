import {NgModule} from '@angular/core';
import { TabsModule } from './tabs/tabs.module';
const MODULE=[TabsModule];
@NgModule({
    imports:[...MODULE],
    exports:[...MODULE]
})
export class CoreModule{
    
}