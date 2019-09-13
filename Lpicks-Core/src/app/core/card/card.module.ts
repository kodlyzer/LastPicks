import { NgModule } from '@angular/core';
import { KdiCard, KdiCardFooter, KdiCardContent, KdiCardTitle } from './card';

const COMPONENT = [KdiCard, KdiCardFooter, KdiCardContent, KdiCardTitle];
@NgModule({
    declarations: [
        ...COMPONENT
    ],
    exports: [
        ...COMPONENT
    ],
    imports: []
})
export class CardModule {
}