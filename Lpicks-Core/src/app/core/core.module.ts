import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
const MODULES = [ModalModule];
@NgModule({
    imports: [...MODULES],
    exports: [...MODULES]
})
export class CoreModule { }
